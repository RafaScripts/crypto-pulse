export interface MarketTickNormalized {
  event_id: string;
  exchange: string;
  symbol: string;
  bid: number;
  ask: number;
  timestamp: string;
  source_latency_ms?: number;
}

export interface MarketCandleNormalized {
  event_id: string;
  exchange: string;
  symbol: string;
  interval: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: string;
  is_final: boolean;
}

export interface ArbitrageOpportunityDetected {
  event_id: string;
  symbol: string;
  buy_exchange: string;
  sell_exchange: string;
  buy_price: number;
  sell_price: number;
  gross_spread_pct: number;
  total_fees_pct: number;
  net_profit_pct: number;
  estimated_profit_amount?: number;
  detected_at: string;
}

export interface AlertsDispatchRequested {
  event_id: string;
  opportunity_id: string;
  user_id: string;
  channel: "telegram" | string;
  target: string;
  message: string;
  requested_at: string;
}
