import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { RedisService } from './redis/redis.service';
import { KafkaPublisher } from './kafka/kafka.publisher';
import { ArbitrageService } from './engine/arbitrage.service';
import { ArbitrageController } from './engine/arbitrage.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [ArbitrageController],
  providers: [RedisService, KafkaPublisher, ArbitrageService],
})
export class AppModule {}
