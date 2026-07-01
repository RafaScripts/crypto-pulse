import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ArbitrageOpportunityDetected } from '@crypto-pulse/events';
import { TelegramService } from '../telegram/telegram.service';

@Controller()
export class KafkaController {
  private readonly logger = new Logger(KafkaController.name);

  constructor(private readonly telegramService: TelegramService) {}

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
        await this.telegramService.sendOpportunityAlert(opp);
      }
    } catch (err) {
      this.logger.error('Failed to parse opportunity message for Notification', err);
    }
  }
}
