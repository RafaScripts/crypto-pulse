'use client';

import { useState } from 'react';
import styles from './settings.module.css';
import { Save, ArrowLeft, Bot, Bell, Percent, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [minProfitPct, setMinProfitPct] = useState(0.5);
  const [telegramAlerts, setTelegramAlerts] = useState(true);
  const [telegramChatId, setTelegramChatId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simula a requisição para a API Gateway para salvar as preferências no BD
    setTimeout(() => {
      setIsLoading(false);
      setToast({ message: 'Preferences saved securely!', type: 'success' });
      setTimeout(() => setToast(null), 3000);
    }, 800);
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <Link href="/" className={styles.backButton}>
            <ArrowLeft size={24} />
          </Link>
          <div>
            <h1>Bot Settings</h1>
            <p>Configure your arbitrage engine parameters</p>
          </div>
        </div>
      </header>

      <form className={styles.formCard} onSubmit={handleSave}>
        <div className={styles.formSection}>
          <div className={styles.sectionHeader}>
            <Percent size={20} className={styles.icon} />
            <h2>Profit Threshold</h2>
          </div>
          <p className={styles.helpText}>Minimum net profit percentage required to trigger an alert.</p>
          <div className={styles.inputGroup}>
            <input 
              type="number" 
              step="0.01" 
              min="0"
              value={minProfitPct}
              onChange={(e) => setMinProfitPct(Number(e.target.value))}
              className={styles.input}
            />
            <span className={styles.suffix}>%</span>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.formSection}>
          <div className={styles.sectionHeader}>
            <Bell size={20} className={styles.icon} />
            <h2>Notifications</h2>
          </div>
          
          <label className={styles.toggleRow}>
            <div className={styles.toggleInfo}>
              <span className={styles.toggleLabel}>Enable Telegram Alerts</span>
              <span className={styles.helpText}>Receive instant notifications for high-profit opportunities.</span>
            </div>
            <div className={`${styles.toggle} ${telegramAlerts ? styles.toggleActive : ''}`} onClick={() => setTelegramAlerts(!telegramAlerts)}>
              <div className={styles.toggleKnob} />
            </div>
          </label>

          {telegramAlerts && (
            <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
              <LinkIcon size={16} className={styles.inputIcon} />
              <input 
                type="text" 
                placeholder="Telegram Chat ID"
                value={telegramChatId}
                onChange={(e) => setTelegramChatId(e.target.value)}
                className={styles.input}
              />
            </div>
          )}
        </div>

        <div className={styles.formFooter}>
          <button type="submit" className={styles.saveButton} disabled={isLoading}>
            {isLoading ? <span className={styles.loader}></span> : <><Save size={18} /> Save Configurations</>}
          </button>
        </div>
        
        {toast && (
          <div className={`${styles.toast} ${styles[toast.type]}`}>
            {toast.message}
          </div>
        )}
      </form>
    </main>
  );
}
