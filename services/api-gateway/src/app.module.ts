import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaService } from './prisma/prisma.service';
import { OpportunitiesService } from './opportunities/opportunities.service';
import { OpportunitiesController } from './opportunities/opportunities.controller';
import { RealtimeGateway } from './realtime/realtime.gateway';
import { KafkaController } from './kafka/kafka.controller';
import { AuthModule } from './auth/auth.module';
import { DeployController } from './deploy/deploy.controller';
import { DeployService } from './deploy/deploy.service';
import { DeployGateway } from './deploy/deploy.gateway';

import { MarketModule } from './market/market.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    AuthModule,
    MarketModule,
  ],
  controllers: [OpportunitiesController, KafkaController, DeployController],
  providers: [PrismaService, OpportunitiesService, RealtimeGateway, DeployService, DeployGateway],
})
export class AppModule {}
