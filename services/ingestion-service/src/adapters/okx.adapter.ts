import { Injectable, Logger } from '@nestjs/common';
import { ExchangeAdapter } from './exchange.interface';
import { MarketTickNormalized, MarketCandleNormalized } from '@crypto-pulse/events';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import * as WebSocket from 'ws';

const SYMBOL_MAP: Record<string, string> = {
  'BTC-USDT': 'BTC/USDT',
  'ETH-USDT': 'ETH/USDT',
  'SOL-USDT': 'SOL/USDT',
  'DOGE-USDT': 'DOGE/USDT',
  'PEPE-USDT': 'PEPE/USDT'
};
const SYMBOLS = Object.keys(SYMBOL_MAP);

@Injectable()
export class OkxAdapter implements ExchangeAdapter {
  private readonly logger = new Logger(OkxAdapter.name);
  private tickSubject = new Subject<MarketTickNormalized>();
  private candleSubject = new Subject<MarketCandleNormalized>();
  private publicWs: WebSocket | null = null;
  private businessWs: WebSocket | null = null;

  connect(): void {
    this.logger.log('Connecting to OKX WebSockets...');
    
    // 1. Public WS for Tickers
    this.publicWs = new WebSocket('wss://ws.okx.com:8443/ws/v5/public');
    this.publicWs.on('open', () => {
      this.logger.log('OKX Public WebSocket connected.');
      this.publicWs?.send(JSON.stringify({
        op: 'subscribe',
        args: SYMBOLS.map(instId => ({ channel: 'tickers', instId }))
      }));
    });
    this.publicWs.on('message', (data: string) => this.handleMessage(data, 'public'));
    this.publicWs.on('error', (err) => this.logger.error('OKX Public WS Error:', err));
    this.publicWs.on('close', () => this.logger.warn('OKX Public WebSocket closed.'));

    // 2. Business WS for Candles
    this.businessWs = new WebSocket('wss://ws.okx.com:8443/ws/v5/business');
    this.businessWs.on('open', () => {
      this.logger.log('OKX Business WebSocket connected.');
      this.businessWs?.send(JSON.stringify({
        op: 'subscribe',
        args: SYMBOLS.map(instId => ({ channel: 'candle1m', instId }))
      }));
    });
    this.businessWs.on('message', (data: string) => this.handleMessage(data, 'business'));
    this.businessWs.on('error', (err) => this.logger.error('OKX Business WS Error:', err));
    this.businessWs.on('close', () => this.logger.warn('OKX Business WebSocket closed.'));
  }

  private handleMessage(data: string, source: 'public' | 'business') {
    try {
      const payload = JSON.parse(data);
      if (!payload.data || !payload.arg) return;

      const channel = payload.arg.channel;
      const instId = payload.arg.instId;
      const symbol = SYMBOL_MAP[instId];
      if (!symbol) return;

      if (channel === 'tickers') {
        for (const d of payload.data) {
          if (d.bidPx && d.askPx) {
            this.tickSubject.next({
              event_id: uuidv4(),
              exchange: 'okx',
              symbol: symbol,
              bid: parseFloat(d.bidPx),
              ask: parseFloat(d.askPx),
              timestamp: new Date(parseInt(d.ts)).toISOString(),
            });
          }
        }
      } else if (channel === 'candle1m') {
        for (const c of payload.data) {
          // [ts, o, h, l, c, vol, volCcy, volCcyQuote, confirm]
          if (c && c.length >= 6) {
            const confirmFlag = c[8]; // '0' or '1'
            this.candleSubject.next({
              event_id: uuidv4(),
              exchange: 'okx',
              symbol: symbol,
              interval: '1m',
              open: parseFloat(c[1]),
              high: parseFloat(c[2]),
              low: parseFloat(c[3]),
              close: parseFloat(c[4]),
              volume: parseFloat(c[5]), // contract volume or base volume depending on spot/future
              timestamp: new Date(parseInt(c[0])).toISOString(),
              is_final: confirmFlag === '1',
            });
          }
        }
      }
    } catch (err) {
      this.logger.error(`Failed to parse OKX ${source} WS message`, err);
    }
  }

  disconnect(): void {
    if (this.publicWs) {
      this.publicWs.close();
      this.publicWs = null;
    }
    if (this.businessWs) {
      this.businessWs.close();
      this.businessWs = null;
    }
    this.logger.log('OKX adapter disconnected.');
  }

  getTicksStream(): Observable<MarketTickNormalized> {
    return this.tickSubject.asObservable();
  }

  getCandlesStream(): Observable<MarketCandleNormalized> {
    return this.candleSubject.asObservable();
  }
}
