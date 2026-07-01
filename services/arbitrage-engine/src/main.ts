import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const brokers = (process.env.KAFKA_BROKERS || 'localhost:9092').split(',');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers,
        clientId: 'arbitrage-engine-consumer',
      },
      consumer: {
        groupId: 'arbitrage-engine-group-v1',
      },
    },
  });

  await app.listen();
  logger.log('Arbitrage Engine microservice is listening on Kafka.');
}
bootstrap();
