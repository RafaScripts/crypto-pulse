import { Injectable, Logger } from '@nestjs/common';
import { ExchangeAdapter } from './exchange.interface';
import { MarketTickNormalized } from '@crypto-pulse/events';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import * as WebSocket from 'ws';

@Injectable()
export class CoinmarketcapAdapter implements ExchangeAdapter {
  private readonly logger = new Logger(CoinmarketcapAdapter.name);
  private tickSubject = new Subject<MarketTickNormalized>();
  private ws: WebSocket | null = null;
  private readonly url = 'wss://pro-stream.coinmarketcap.com/v1';

  connect(): void {
    const apiKey = process.env.COINMARKETCAP_API_KEY;
    if (!apiKey) {
      this.logger.error('COINMARKETCAP_API_KEY not found in environment variables. Cannot connect to CMC WebSocket.');
      return;
    }

    this.logger.log('Connecting to CoinMarketCap WebSocket...');
    this.ws = new WebSocket(this.url, {
      headers: {
        'X-CMC_PRO_API_KEY': apiKey
      }
    });

    this.ws.on('open', () => {
      this.logger.log('CoinMarketCap WebSocket connected.');
      
      const subscribeMsg = {
        id: 1,
        method: "subscribe",
        channel: "market@crypto_latest_price",
        params: {
          crypto_ids: [1] // 1 is Bitcoin (BTC)
        }
      };
      this.ws?.send(JSON.stringify(subscribeMsg));
    });

    this.ws.on('message', (data: string) => {
      try {
        const payload = JSON.parse(data);

        // Payload format for data:
        // { "type": "data", "channel": "market@crypto_latest_price", "data": { "cid": 1, "p": 81187.93, "ts": 1718800000000 } }
        if (payload.type === 'data' && payload.channel === 'market@crypto_latest_price') {
          const d = payload.data;
          if (d && d.cid === 1 && d.p) {
            this.tickSubject.next({
              event_id: uuidv4(),
              exchange: 'coinmarketcap',
              symbol: 'BTC/USDT',
              // Since CMC provides a single spot quote price without bid/ask spread, we use the price for both
              bid: parseFloat(d.p),
              ask: parseFloat(d.p),
              timestamp: new Date(d.ts).toISOString(),
            });
          }
        }
      } catch (err) {
        this.logger.error('Failed to parse CoinMarketCap WS message', err);
      }
    });

    this.ws.on('error', (err) => {
      this.logger.error('CoinMarketCap WS Error:', err);
    });

    this.ws.on('close', () => {
      this.logger.warn('CoinMarketCap WebSocket closed.');
    });
  }

  disconnect(): void {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.logger.log('CoinMarketCap adapter disconnected.');
  }

  getTicksStream(): Observable<MarketTickNormalized> {
    return this.tickSubject.asObservable();
  }
}
