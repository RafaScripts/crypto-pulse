import { Injectable, Logger } from '@nestjs/common';
import { MarketTickNormalized, ArbitrageOpportunityDetected } from '@crypto-pulse/events';
import { RedisService } from '../redis/redis.service';
import { KafkaPublisher } from '../kafka/kafka.publisher';
import { ConfigService } from '@nestjs/config';
import { v4 as uuidv4 } from 'uuid';

interface PriceState {
  bid: number;
  ask: number;
  timestamp: string;
}

@Injectable()
export class ArbitrageService {
  private readonly logger = new Logger(ArbitrageService.name);
  
  // State in-memory cache: map[symbol] -> map[exchange] -> PriceState
  private priceState = new Map<string, Map<string, PriceState>>();

  constructor(
    private redisService: RedisService,
    private kafkaPublisher: KafkaPublisher,
    private configService: ConfigService
  ) {}

  async processTick(tick: MarketTickNormalized) {
    if (!this.priceState.has(tick.symbol)) {
      this.priceState.set(tick.symbol, new Map());
    }
    const exchangeMap = this.priceState.get(tick.symbol)!;
    exchangeMap.set(tick.exchange, { bid: tick.bid, ask: tick.ask, timestamp: tick.timestamp });

    // Compare with other exchanges for this symbol to find crossed books
    for (const [otherExchange, otherPrice] of exchangeMap.entries()) {
      if (otherExchange === tick.exchange) continue;

      // Scenario 1: Buy on TICK exchange, Sell on OTHER exchange
      await this.checkOpportunity(tick.symbol, tick.exchange, tick.ask, otherExchange, otherPrice.bid);
      
      // Scenario 2: Buy on OTHER exchange, Sell on TICK exchange
      await this.checkOpportunity(tick.symbol, otherExchange, otherPrice.ask, tick.exchange, tick.bid);
    }
  }

  private async checkOpportunity(symbol: string, buyEx: string, buyPrice: number, sellEx: string, sellPrice: number) {
    if (buyPrice >= sellPrice) return; // No opportunity

    const grossSpreadPct = ((sellPrice - buyPrice) / buyPrice) * 100;
    
    // Simulate fees (taker fee applied on both buy and sell legs) - Reduzido para testar
    const takerFee = this.configService.get<number>('fees.taker') || 0.0001;
    const totalFeesPct = (takerFee * 2) * 100;
    
    const netProfitPct = grossSpreadPct - totalFeesPct;

    // Minimum profit threshold to act (e.g. 0.01% to see more events on UI)
    if (netProfitPct > 0.01) {
      // Deduplicate using Redis (lock for 10 seconds para aparecerem mais rápido)
      const isNew = await this.redisService.lockOpportunity(buyEx, sellEx, symbol, 10);
      
      if (isNew) {
        const opp: ArbitrageOpportunityDetected = {
          event_id: uuidv4(),
          symbol,
          buy_exchange: buyEx,
          sell_exchange: sellEx,
          buy_price: buyPrice,
          sell_price: sellPrice,
          gross_spread_pct: grossSpreadPct,
          total_fees_pct: totalFeesPct,
          net_profit_pct: netProfitPct,
          detected_at: new Date().toISOString(),
        };

        await this.kafkaPublisher.publishOpportunity(opp);
      } else {
        this.logger.debug(`Opportunity suppressed by Redis dedup lock for ${buyEx}->${sellEx}`);
      }
    }
  }
}
