import React from 'react';
import styles from './OpportunityCard.module.css';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface OppProps {
  symbol: string;
  buyExchange: string;
  sellExchange: string;
  buyPrice: number;
  sellPrice: number;
  netProfitPct: number;
  detectedAt: string;
}

export function OpportunityCard({ symbol, buyExchange, sellExchange, buyPrice, sellPrice, netProfitPct, detectedAt }: OppProps) {
  const timeStr = new Date(detectedAt).toLocaleTimeString();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.symbol}>{symbol}</div>
        <div className={styles.profitBadge}>
          <TrendingUp size={16} />
          {netProfitPct.toFixed(3)}%
        </div>
      </div>
      
      <div className={styles.route}>
        <div className={styles.exchange}>
          <span className={styles.exchangeName}>Buy on {buyExchange}</span>
          <span className={styles.price}>${buyPrice.toFixed(4)}</span>
        </div>
        
        <div className={styles.arrow}>
          <ArrowRight size={20} />
        </div>
        
        <div className={styles.exchange} style={{ alignItems: 'flex-end' }}>
          <span className={styles.exchangeName}>Sell on {sellExchange}</span>
          <span className={styles.price}>${sellPrice.toFixed(4)}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <span>Net Spread (Fees Deducted)</span>
        <span>{timeStr}</span>
      </div>
    </div>
  );
}
