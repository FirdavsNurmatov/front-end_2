import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('shopping-center');
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT') ?? 3000);
}
bootstrap();
