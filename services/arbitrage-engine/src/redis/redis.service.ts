import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private redis: Redis;
  private readonly logger = new Logger(RedisService.name);

  constructor(private configService: ConfigService) {
    this.redis = new Redis(this.configService.get<string>('redis.url') || 'redis://localhost:6379');
  }

  onModuleInit() {
    this.logger.log('Redis connected for Deduplication.');
  }

  onModuleDestroy() {
    this.redis.quit();
  }

  // Uses SETNX to prevent duplicate opportunities in a time window
  async lockOpportunity(buyExchange: string, sellExchange: string, symbol: string, windowSeconds: number = 60): Promise<boolean> {
    const key = `opp:${symbol}:${buyExchange}:${sellExchange}`;
    const result = await this.redis.setnx(key, '1');
    if (result === 1) {
      await this.redis.expire(key, windowSeconds);
      return true;
    }
    return false;
  }
}
