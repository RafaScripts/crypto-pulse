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
        clientId: 'persistence-service-consumer',
      },
      consumer: {
        groupId: 'persistence-service-group-v1',
      },
    },
  });

  await app.listen();
  logger.log('Persistence Service is listening on Kafka.');
}
bootstrap();
