import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const logger = new Logger('Bootstrap');
  logger.log('Ingestion Service started (headless).');
  
  // Mantém o processo rodando
  await new Promise(() => {});
}
bootstrap();
