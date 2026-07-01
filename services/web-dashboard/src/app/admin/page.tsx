'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css';
import io from 'socket.io-client';
import { Terminal, Rocket, Clock, CheckCircle, XCircle, Activity } from 'lucide-react';
import Link from 'next/link';

interface Deployment {
  id: string;
  status: string;
  logs: string | null;
  started_at: string;
  finished_at: string | null;
}

export default function AdminDeployPanel() {
  const [deployments, setDeployments] = useState<Deployment[]>([]);
  const [activeDeploy, setActiveDeploy] = useState<Deployment | null>(null);
  const [liveLogs, setLiveLogs] = useState<string>('');
  const [isDeploying, setIsDeploying] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Fetch initial history
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    fetch(`${apiUrl}/api/deploy`)
      .then(res => res.json())
      .then(data => {
        setDeployments(data);
        if (data.length > 0 && data[0].status === 'RUNNING') {
          setActiveDeploy(data[0]);
          setLiveLogs(data[0].logs || '');
          setIsDeploying(true);
        } else if (data.length > 0) {
          setActiveDeploy(data[0]);
          setLiveLogs(data[0].logs || 'No logs available.');
        }
      })
      .catch(err => console.error('Failed to load deployments', err));
  }, []);

  // Socket connection for live logs
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const socket = io(`${apiUrl}/deploy`, { path: '/socket.io' });

    socket.on('connect', () => {
      console.log('Connected to Deploy WebSockets');
    });

    socket.on('deploy_log', (data: { deploymentId: string, logLine: string }) => {
      if (activeDeploy && data.deploymentId === activeDeploy.id) {
        setLiveLogs(prev => prev + data.logLine);
      } else if (!activeDeploy || isDeploying) {
        // If we are deploying but don't have active deploy set properly, or just tracking the latest
        setLiveLogs(prev => prev + data.logLine);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [activeDeploy, isDeploying]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [liveLogs]);

  const handleTriggerDeploy = async () => {
    if (!confirm('Are you sure you want to trigger a new deployment to production?')) return;
    
    setIsDeploying(true);
    setLiveLogs('Initializing deployment...\n');
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
      const res = await fetch(`${apiUrl}/api/deploy/trigger`, { method: 'POST' });
      const newDeploy = await res.json();
      
      setActiveDeploy(newDeploy);
      setDeployments(prev => [newDeploy, ...prev]);
    } catch (err) {
      console.error(err);
      setLiveLogs(prev => prev + '\nFailed to trigger deployment API.');
      setIsDeploying(false);
    }
  };

  const selectDeployment = (deploy: Deployment) => {
    setActiveDeploy(deploy);
    setLiveLogs(deploy.logs || 'No logs recorded.');
    setIsDeploying(deploy.status === 'RUNNING');
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'SUCCESS': return <CheckCircle size={16} />;
      case 'FAILED': return <XCircle size={16} />;
      case 'RUNNING': return <Activity size={16} className="animate-spin" />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <h1>Admin Control Panel</h1>
          <p>Manage and monitor infrastructure deployments</p>
        </div>
        
        <button 
          className={styles.deployButton} 
          onClick={handleTriggerDeploy}
          disabled={isDeploying}
        >
          <Rocket size={18} />
          {isDeploying ? 'Deploy in Progress...' : 'Trigger New Deploy'}
        </button>
      </header>

      <div className={styles.content}>
        {/* Left Column: History */}
        <div className={styles.historyCard}>
          <h2>Deployment History</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {deployments.map(dep => (
                  <tr 
                    key={dep.id} 
                    onClick={() => selectDeployment(dep)}
                    style={{ background: activeDeploy?.id === dep.id ? 'var(--surface-hover)' : '' }}
                  >
                    <td>
                      {new Date(dep.started_at).toLocaleDateString()} {new Date(dep.started_at).toLocaleTimeString()}
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[`status${dep.status}`]}`}>
                        {dep.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {deployments.length === 0 && (
                  <tr>
                    <td colSpan={2} style={{ textAlign: 'center', padding: '2rem' }}>
                      No deployments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Terminal */}
        <div className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span></span><span></span><span></span>
            </div>
            <div className={styles.terminalTitle}>
              {activeDeploy ? `Deploy Log: ${activeDeploy.id.split('-')[0]}` : 'Terminal'}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8b8b9e' }}>
              {activeDeploy && getStatusIcon(activeDeploy.status)}
              <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>
                {activeDeploy ? activeDeploy.status : 'IDLE'}
              </span>
            </div>
          </div>
          <div className={styles.terminalBody} ref={terminalRef}>
            <p>{liveLogs || 'Select a deployment to view logs...'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
