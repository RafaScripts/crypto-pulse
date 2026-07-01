import { Injectable, Logger } from '@nestjs/common';
import { ArbitrageOpportunityDetected } from '@crypto-pulse/events';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OpportunityService {
  private readonly logger = new Logger(OpportunityService.name);

  constructor(private prisma: PrismaService) {}

  async processOpportunity(opp: ArbitrageOpportunityDetected) {
    try {
      // 1. Upsert Trading Pair
      const [baseAsset, quoteAsset] = opp.symbol.split('/');
      const pair = await this.prisma.tradingPair.upsert({
        where: { symbol: opp.symbol },
        update: {},
        create: {
          symbol: opp.symbol,
          base_asset: baseAsset || 'UNKNOWN',
          quote_asset: quoteAsset || 'UNKNOWN',
          active: true,
        }
      });

      // 2. Upsert Buy Exchange
      const buyExchange = await this.prisma.exchange.upsert({
        where: { code: opp.buy_exchange },
        update: {},
        create: { code: opp.buy_exchange, name: opp.buy_exchange.toUpperCase() }
      });

      // 3. Upsert Sell Exchange
      const sellExchange = await this.prisma.exchange.upsert({
        where: { code: opp.sell_exchange },
        update: {},
        create: { code: opp.sell_exchange, name: opp.sell_exchange.toUpperCase() }
      });

      // 4. Create Opportunity Record
      await this.prisma.arbitrageOpportunity.create({
        data: {
          trading_pair_id: pair.id,
          buy_exchange_id: buyExchange.id,
          sell_exchange_id: sellExchange.id,
          buy_price: opp.buy_price,
          sell_price: opp.sell_price,
          gross_spread_pct: opp.gross_spread_pct,
          total_fees_pct: opp.total_fees_pct,
          net_profit_pct: opp.net_profit_pct,
          detected_at: new Date(opp.detected_at),
          status: 'detected'
        }
      });

      this.logger.log(`Persisted opportunity: ${opp.buy_exchange} -> ${opp.sell_exchange} for ${opp.symbol}`);
    } catch (error) {
      this.logger.error(`Failed to persist opportunity: ${error.message}`, error.stack);
    }
  }
}
