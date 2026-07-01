'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { OpportunityCard } from '../components/OpportunityCard/OpportunityCard';
import dynamic from 'next/dynamic';
import type { CandleData } from '../components/CandleChart';
import io from 'socket.io-client';
import { Activity, Settings, LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';

const CandleChart = dynamic(() => import('../components/CandleChart').then(mod => mod.CandleChart), { 
  ssr: false,
  loading: () => <div style={{ height: 300, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)', borderRadius: 12 }}>Loading chart...</div>
});

export default function Home() {
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [candles, setCandles] = useState<CandleData[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'detectedAt' | 'netProfitPct'>('detectedAt');
  const [activeSymbol, setActiveSymbol] = useState<string>('BTC/USDT');
  
  const AVAILABLE_COINS = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'DOGE/USDT', 'PEPE/USDT'];

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    // 1. Carregar histórico REST inicial da API Gateway
    fetch(`${apiUrl}/api/opportunities?limit=20`)
      .then(res => res.json())
      .then(data => setOpportunities(data))
      .catch(err => console.error('Failed to load initial data', err));

    // 2. Conectar WebSocket
    const socket = io(apiUrl || undefined, { path: '/socket.io' });

    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('new_opportunity', (opp) => {
      // Adiciona no topo da lista animadamente (mantém últimos 50 eventos)
      setOpportunities((prev) => [opp, ...prev].slice(0, 50));
    });

    socket.on('new_candle', (candle: CandleData) => {
      // Atualiza as velas no estado
      setCandles((prev) => {
        // Find existing candle with same timestamp and exchange and update it, else push new
        const existingIndex = prev.findIndex(c => 
          new Date(c.timestamp).getTime() === new Date(candle.timestamp).getTime() && 
          c.symbol === candle.symbol &&
          c.exchange === candle.exchange
        );
        
        if (existingIndex >= 0) {
          const next = [...prev];
          next[existingIndex] = candle;
          return next;
        }
        
        return [...prev, candle].slice(-200); // keep last 200 candles in memory
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const filteredOpportunities = opportunities.filter(o => {
    const symbol = o.symbol || o.trading_pair?.symbol;
    return symbol === activeSymbol;
  });

  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    if (sortBy === 'netProfitPct') {
      return Number(b.net_profit_pct) - Number(a.net_profit_pct);
    }
    return new Date(b.detected_at).getTime() - new Date(a.detected_at).getTime();
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleGroup}>
          <h1>Crypto Pulse</h1>
          <p>Real-time Arbitrage Intelligence</p>
        </div>
        
        <div className={styles.statusGroup}>
          <div className={styles.statusIndicator}>
            <div 
              className={styles.dot} 
              style={{ 
                backgroundColor: isConnected ? 'var(--success)' : 'var(--danger)', 
                boxShadow: isConnected ? '0 0 10px var(--success)' : '0 0 10px var(--danger)' 
              }} 
            />
            {isConnected ? 'System Live' : 'Reconnecting...'}
          </div>
          <select 
            value={activeSymbol} 
            onChange={e => setActiveSymbol(e.target.value)}
            style={{ 
              marginLeft: 16, 
              padding: '6px 12px', 
              borderRadius: 8, 
              background: 'var(--surface)', 
              color: 'var(--text)', 
              border: '1px solid var(--border)',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {AVAILABLE_COINS.map(coin => <option key={coin} value={coin}>{coin}</option>)}
          </select>
          <Link href="/settings" className={styles.settingsButton}>
            <Settings size={22} />
          </Link>
        </div>
      </header>

      {/* Candle Chart Widget */}
      {isConnected && (
        <div className={styles.chartsGrid}>
          {Array.from(new Set(candles.filter(c => c.symbol === activeSymbol).map(c => c.exchange))).map(exchange => (
            <CandleChart 
              key={`${exchange}-${activeSymbol}`} 
              candles={candles} 
              symbol={activeSymbol} 
              exchange={exchange} 
              height={300} 
            />
          ))}
        </div>
      )}

      <div className={styles.toolbar}>
        <div className={styles.sortGroup}>
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'detectedAt' | 'netProfitPct')}>
            <option value="detectedAt">Latest Detected</option>
            <option value="netProfitPct">Highest Net Profit</option>
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button 
            className={viewMode === 'grid' ? styles.activeView : ''} 
            onClick={() => setViewMode('grid')}
            title="Grid View"
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            className={viewMode === 'table' ? styles.activeView : ''} 
            onClick={() => setViewMode('table')}
            title="Table View"
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {opportunities.length === 0 ? (
        <div className={styles.emptyState}>
          <Activity size={48} color="var(--primary)" />
          <h2>Waiting for opportunities...</h2>
          <p>The engine is scanning multiple exchanges for arbitrage spreads.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className={styles.grid}>
          {sortedOpportunities.map((opp, idx) => (
            <OpportunityCard 
              key={opp.event_id || opp.id || idx}
              symbol={opp.symbol || opp.trading_pair?.symbol}
              buyExchange={opp.buy_exchange?.code || opp.buy_exchange}
              sellExchange={opp.sell_exchange?.code || opp.sell_exchange}
              buyPrice={Number(opp.buy_price)}
              sellPrice={Number(opp.sell_price)}
              netProfitPct={Number(opp.net_profit_pct)}
              detectedAt={opp.detected_at}
            />
          ))}
        </div>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Buy Exchange</th>
                <th>Sell Exchange</th>
                <th>Buy Price</th>
                <th>Sell Price</th>
                <th>Net Profit</th>
                <th>Time Detected</th>
              </tr>
            </thead>
            <tbody>
              {sortedOpportunities.map((opp, idx) => (
                <tr key={opp.event_id || opp.id || idx}>
                  <td className={styles.symbolCell}>{opp.symbol || opp.trading_pair?.symbol}</td>
                  <td>{opp.buy_exchange?.code || opp.buy_exchange}</td>
                  <td>{opp.sell_exchange?.code || opp.sell_exchange}</td>
                  <td className={styles.priceCell}>${Number(opp.buy_price).toFixed(4)}</td>
                  <td className={styles.priceCell}>${Number(opp.sell_price).toFixed(4)}</td>
                  <td className={styles.profitCell}>{Number(opp.net_profit_pct).toFixed(2)}%</td>
                  <td className={styles.timeCell}>{new Date(opp.detected_at).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
