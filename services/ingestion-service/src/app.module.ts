import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { KafkaService } from './kafka/kafka.service';
import { SimulatorAdapter } from './adapters/simulator.adapter';
import { BinanceAdapter } from './adapters/binance.adapter';
import { OkxAdapter } from './adapters/okx.adapter';
import { CoinmarketcapAdapter } from './adapters/coinmarketcap.adapter';
import { IngestionService } from './ingestion.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [KafkaService, SimulatorAdapter, BinanceAdapter, OkxAdapter, CoinmarketcapAdapter, IngestionService],
})
export class AppModule {}
