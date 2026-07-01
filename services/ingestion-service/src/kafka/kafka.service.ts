import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';
import { ConfigService } from '@nestjs/config';
import { MarketTickNormalized, MarketCandleNormalized } from '@crypto-pulse/events';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;
  private readonly logger = new Logger(KafkaService.name);

  constructor(private configService: ConfigService) {
    this.kafka = new Kafka({
      clientId: 'ingestion-service',
      brokers: this.configService.get<string[]>('kafka.brokers') || ['localhost:9092'],
    });
    this.producer = this.kafka.producer();
  }

  async onModuleInit() {
    await this.producer.connect();
    this.logger.log('Kafka Producer connected successfully.');
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  async publishMarketTick(tick: MarketTickNormalized) {
    try {
      await this.producer.send({
        topic: 'market.ticks.v1',
        messages: [{ 
          key: `${tick.exchange}:${tick.symbol}`, 
          value: JSON.stringify(tick) 
        }],
      });
    } catch (error) {
      this.logger.error(`Failed to publish tick to market.ticks.v1`, error);
    }
  }

  async publishMarketCandle(candle: MarketCandleNormalized) {
    try {
      await this.producer.send({
        topic: 'market.candles.v1',
        messages: [{ 
          key: `${candle.exchange}:${candle.symbol}:${candle.interval}`, 
          value: JSON.stringify(candle) 
        }],
      });
    } catch (error) {
      this.logger.error(`Failed to publish candle to market.candles.v1`, error);
    }
  }
}
