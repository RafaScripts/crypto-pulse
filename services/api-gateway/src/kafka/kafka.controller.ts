import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ArbitrageOpportunityDetected, MarketCandleNormalized } from '@crypto-pulse/events';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@Controller()
export class KafkaController {
  private readonly logger = new Logger(KafkaController.name);

  constructor(private readonly realtimeGateway: RealtimeGateway) {}

  @EventPattern('arbitrage.opportunities.v1')
  async handleOpportunity(@Payload() message: any) {
    try {
      let opp: ArbitrageOpportunityDetected;
      if (typeof message === 'string') {
        opp = JSON.parse(message);
      } else if (message?.value && typeof message.value === 'string') {
        opp = JSON.parse(message.value);
      } else {
        opp = message;
      }
      
      if (opp && opp.symbol) {
        // Dispara para o Socket.io instantaneamente
        this.realtimeGateway.broadcastOpportunity(opp);
      }
    } catch (err) {
      this.logger.error('Failed to parse opportunity message for WS broadcast', err);
    }
  }

  @EventPattern('market.candles.v1')
  async handleCandle(@Payload() message: any) {
    try {
      let candle: MarketCandleNormalized;
      if (typeof message === 'string') {
        candle = JSON.parse(message);
      } else if (message?.value && typeof message.value === 'string') {
        candle = JSON.parse(message.value);
      } else {
        candle = message;
      }
      
      if (candle && candle.symbol) {
        // Dispara para o Socket.io instantaneamente
        this.realtimeGateway.broadcastCandle(candle);
      }
    } catch (err) {
      this.logger.error('Failed to parse candle message for WS broadcast', err);
    }
  }
}

