import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DetailingModule } from './cars/cars-detailing/detailing.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './shared/services/prisma.service';
import * as cors from 'cors';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    DetailingModule,
    PrismaModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(cors({ credentials: true, origin: 'http://localhost:3000' }))
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
