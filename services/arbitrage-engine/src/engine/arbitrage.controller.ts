import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MarketTickNormalized } from '@crypto-pulse/events';
import { ArbitrageService } from './arbitrage.service';

@Controller()
export class ArbitrageController {
  private readonly logger = new Logger(ArbitrageController.name);

  constructor(private readonly arbitrageService: ArbitrageService) {}

  @EventPattern('market.ticks.v1')
  async handleMarketTick(@Payload() message: any) {
    try {
      // Depending on NestJS config, Kafka message value can be injected differently.
      let tick: MarketTickNormalized;
      if (typeof message === 'string') {
        tick = JSON.parse(message);
      } else if (message?.value && typeof message.value === 'string') {
        tick = JSON.parse(message.value);
      } else {
        tick = message;
      }
      
      if (tick && tick.symbol) {
        await this.arbitrageService.processTick(tick);
      }
    } catch (err) {
      this.logger.error('Failed to process tick message', err);
    }
  }
}
