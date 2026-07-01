import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SimulatorAdapter } from './adapters/simulator.adapter';
import { BinanceAdapter } from './adapters/binance.adapter';
import { OkxAdapter } from './adapters/okx.adapter';
import { CoinmarketcapAdapter } from './adapters/coinmarketcap.adapter';
import { KafkaService } from './kafka/kafka.service';
import { Subscription } from 'rxjs';

@Injectable()
export class IngestionService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(IngestionService.name);
  private subscriptions: Subscription[] = [];

  constructor(
    private configService: ConfigService,
    private simulatorAdapter: SimulatorAdapter,
    private binanceAdapter: BinanceAdapter,
    private okxAdapter: OkxAdapter,
    private coinmarketcapAdapter: CoinmarketcapAdapter,
    private kafkaService: KafkaService,
  ) {}

  onModuleInit() {
    const useSimulator = this.configService.get<boolean>('useSimulator');

    if (useSimulator) {
      this.logger.log('Starting ingestion with Simulator Adapter');
      this.simulatorAdapter.connect();
      
      this.subscriptions.push(
        this.simulatorAdapter.getTicksStream().subscribe((tick) => {
          this.kafkaService.publishMarketTick(tick);
        })
      );
    } else {
      this.logger.log('Starting ingestion with Real Adapters (Binance/OKX/CoinMarketCap)');
      
      this.binanceAdapter.connect();
      this.okxAdapter.connect();
      this.coinmarketcapAdapter.connect();

      this.subscriptions.push(
        // Binance Streams
        this.binanceAdapter.getTicksStream().subscribe((tick) => {
          this.kafkaService.publishMarketTick(tick);
        }),
        this.binanceAdapter.getCandlesStream().subscribe((candle) => {
          this.kafkaService.publishMarketCandle(candle);
        }),
        
        // OKX Streams
        this.okxAdapter.getTicksStream().subscribe((tick) => {
          this.kafkaService.publishMarketTick(tick);
        }),
        this.okxAdapter.getCandlesStream().subscribe((candle) => {
          this.kafkaService.publishMarketCandle(candle);
        }),
        
        // CoinMarketCap Streams (only ticks)
        this.coinmarketcapAdapter.getTicksStream().subscribe((tick) => {
          this.kafkaService.publishMarketTick(tick);
        })
      );
    }
  }

  onModuleDestroy() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
    this.simulatorAdapter.disconnect();
    this.binanceAdapter.disconnect();
    this.okxAdapter.disconnect();
    this.coinmarketcapAdapter.disconnect();
  }
}

