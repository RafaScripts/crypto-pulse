import { Injectable, Logger } from '@nestjs/common';
import { ExchangeAdapter } from './exchange.interface';
import { MarketTickNormalized } from '@crypto-pulse/events';
import { Observable, Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SimulatorAdapter implements ExchangeAdapter {
  private readonly logger = new Logger(SimulatorAdapter.name);
  private subject = new Subject<MarketTickNormalized>();
  private interval: NodeJS.Timeout | null = null;

  connect(): void {
    this.logger.log('Simulator connecting... generating fake ticks.');
    // Emitimos ticks falsos a cada 1 segundo
    this.interval = setInterval(() => this.generateTick(), 1000);
  }

  disconnect(): void {
    if (this.interval) clearInterval(this.interval);
    this.logger.log('Simulator disconnected.');
  }

  getTicksStream(): Observable<MarketTickNormalized> {
    return this.subject.asObservable();
  }

  private generateTick() {
    const basePrice = 60000 + Math.random() * 1000 - 500;
    
    // Simulate Binance
    this.subject.next({
      event_id: uuidv4(),
      exchange: 'binance',
      symbol: 'BTC/USDT',
      bid: basePrice - 10,
      ask: basePrice + 10,
      timestamp: new Date().toISOString(),
      source_latency_ms: Math.floor(Math.random() * 50)
    });

    // Simulate Kraken com 20% de chance de dar um spread alto (oportunidade de arbitragem)
    const krakenOffset = Math.random() > 0.8 ? 50 : 0; 
    this.subject.next({
      event_id: uuidv4(),
      exchange: 'kraken',
      symbol: 'BTC/USDT',
      bid: basePrice - 12 + krakenOffset,
      ask: basePrice + 15 + krakenOffset,
      timestamp: new Date().toISOString(),
      source_latency_ms: Math.floor(Math.random() * 50)
    });
  }
}
