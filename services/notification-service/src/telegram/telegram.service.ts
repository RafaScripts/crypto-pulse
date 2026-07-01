import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { ArbitrageOpportunityDetected } from '@crypto-pulse/events';

@Injectable()
export class TelegramService implements OnModuleInit {
  private bot: Telegraf | null = null;
  private readonly logger = new Logger(TelegramService.name);
  private defaultChatId: string;

  constructor(private configService: ConfigService) {
    const token = this.configService.get<string>('telegram.token');
    this.defaultChatId = this.configService.get<string>('telegram.chatId') || '';
    
    if (token) {
      this.bot = new Telegraf(token);
    } else {
      this.logger.warn('TELEGRAM_BOT_TOKEN is not set. Telegram notifications will be mocked to console.');
    }
  }

  onModuleInit() {
    if (this.bot) {
      this.logger.log('Telegram Bot initialized.');
    }
  }

  async sendOpportunityAlert(opportunity: ArbitrageOpportunityDetected) {
    const message = `
🚨 <b>Arbitrage Opportunity Detected!</b> 🚨
<b>Pair:</b> ${opportunity.symbol}
<b>Buy on:</b> ${opportunity.buy_exchange.toUpperCase()} at $${opportunity.buy_price.toFixed(4)}
<b>Sell on:</b> ${opportunity.sell_exchange.toUpperCase()} at $${opportunity.sell_price.toFixed(4)}
<b>Net Profit (fees deducted):</b> ${opportunity.net_profit_pct.toFixed(3)}%
    `.trim();

    if (this.bot && this.defaultChatId) {
      try {
        await this.bot.telegram.sendMessage(this.defaultChatId, message, { parse_mode: 'HTML' });
        this.logger.log(`Sent Telegram alert for ${opportunity.symbol}`);
      } catch (err) {
        this.logger.error(`Failed to send Telegram message: ${err.message}`);
      }
    } else {
      this.logger.log(`[MOCKED TELEGRAM ALERT] ->\n${message}`);
    }
  }
}
