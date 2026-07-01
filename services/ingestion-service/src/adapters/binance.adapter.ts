import { Injectable, Logger } from '@nestjs/common';
import { ExchangeAdapter } from './exchange.interface';
import { MarketTickNormalized, MarketCandleNormalized } from '@crypto-pulse/events';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import * as WebSocket from 'ws';

const SYMBOL_MAP: Record<string, string> = {
  'btcusdt': 'BTC/USDT',
  'ethusdt': 'ETH/USDT',
  'solusdt': 'SOL/USDT',
  'dogeusdt': 'DOGE/USDT',
  'pepeusdt': 'PEPE/USDT'
};
const STREAMS = Object.keys(SYMBOL_MAP).map(s => `${s}@bookTicker/${s}@kline_1m`).join('/');

@Injectable()
export class BinanceAdapter implements ExchangeAdapter {
  private readonly logger = new Logger(BinanceAdapter.name);
  private tickSubject = new Subject<MarketTickNormalized>();
  private candleSubject = new Subject<MarketCandleNormalized>();
  private ws: WebSocket | null = null;
  private readonly url = `wss://stream.binance.com:9443/stream?streams=${STREAMS}`;

  connect(): void {
    this.logger.log('Connecting to Binance WebSocket...');
    this.ws = new WebSocket(this.url);

    this.ws.on('open', () => {
      this.logger.log('Binance WebSocket connected.');
    });

    this.ws.on('message', (data: string) => {
      try {
        const payload = JSON.parse(data);
        if (!payload.data) return;
        const stream = payload.stream;
        const d = payload.data;

        const rawSymbol = stream.split('@')[0];
        const symbol = SYMBOL_MAP[rawSymbol];
        if (!symbol) return;

        if (stream.endsWith('@bookTicker')) {
          if (d.b && d.a) {
            this.tickSubject.next({
              event_id: uuidv4(),
              exchange: 'binance',
              symbol: symbol,
              bid: parseFloat(d.b),
              ask: parseFloat(d.a),
              timestamp: new Date().toISOString(),
            });
          }
        } else if (stream.endsWith('@kline_1m')) {
          if (d.k) {
            const k = d.k;
            this.candleSubject.next({
              event_id: uuidv4(),
              exchange: 'binance',
              symbol: symbol,
              interval: '1m',
              open: parseFloat(k.o),
              high: parseFloat(k.h),
              low: parseFloat(k.l),
              close: parseFloat(k.c),
              volume: parseFloat(k.v),
              timestamp: new Date(k.t).toISOString(),
              is_final: k.x,
            });
          }
        }
      } catch (err) {
        this.logger.error('Failed to parse Binance WS message', err);
      }
    });

    this.ws.on('error', (err) => {
      this.logger.error('Binance WS Error:', err);
    });

    this.ws.on('close', () => {
      this.logger.warn('Binance WebSocket closed.');
    });
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.logger.log('Binance adapter disconnected.');
  }

  getTicksStream(): Observable<MarketTickNormalized> {
    return this.tickSubject.asObservable();
  }

  getCandlesStream(): Observable<MarketCandleNormalized> {
    return this.candleSubject.asObservable();
  }
}
