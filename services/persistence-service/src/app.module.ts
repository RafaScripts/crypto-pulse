import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PrismaService } from './prisma/prisma.service';
import { OpportunityService } from './opportunity/opportunity.service';
import { KafkaController } from './kafka/kafka.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [KafkaController],
  providers: [PrismaService, OpportunityService],
})
export class AppModule {}
