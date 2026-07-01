import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';
import { ConfigService } from '@nestjs/config';
import { ArbitrageOpportunityDetected } from '@crypto-pulse/events';

@Injectable()
export class KafkaPublisher implements OnModuleInit, OnModuleDestroy {
  private kafka: Kafka;
  private producer: Producer;
  private readonly logger = new Logger(KafkaPublisher.name);

  constructor(private configService: ConfigService) {
    this.kafka = new Kafka({
      clientId: 'arbitrage-engine',
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

  async publishOpportunity(opportunity: ArbitrageOpportunityDetected) {
    try {
      await this.producer.send({
        topic: 'arbitrage.opportunities.v1',
        messages: [{ 
          key: `${opportunity.symbol}`, 
          value: JSON.stringify(opportunity) 
        }],
      });
      this.logger.log(`Published opportunity for ${opportunity.symbol}: Buy @ ${opportunity.buy_exchange}, Sell @ ${opportunity.sell_exchange} (Net Profit: ${opportunity.net_profit_pct.toFixed(3)}%)`);
    } catch (error) {
      this.logger.error(`Failed to publish opportunity`, error);
    }
  }
}
