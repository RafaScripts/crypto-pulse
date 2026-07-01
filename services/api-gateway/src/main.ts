import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  
  // Create HTTP API App (which also attaches the WebSocket Gateway)
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow frontend to hit the REST API

  const configService = app.get(ConfigService);
  const brokers = configService.get<string[]>('kafka.brokers') || ['localhost:9092'];
  const port = configService.get<number>('port') || 3001;

  // Connect Kafka Microservice alongside the HTTP Server
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers,
        clientId: 'api-gateway-consumer',
      },
      consumer: {
        groupId: 'api-gateway-group-v1',
      },
    },
  });

  // Start both HTTP/WS and Kafka consumers
  await app.startAllMicroservices();
  await app.listen(port);
  
  logger.log(`API Gateway is running on http://localhost:${port}`);
  logger.log('API Gateway Kafka Microservice is listening.');
}
bootstrap();
