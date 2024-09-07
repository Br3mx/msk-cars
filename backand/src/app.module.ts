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
import { MailModule } from './email/email.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExportModule } from './cars/cars-exports/export.module';
import { PromotionModule } from './promotion/promotion.module';

@Module({
  imports: [
    DetailingModule,
    ExportModule,
    MailModule,
    PrismaModule,
    PromotionModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, PrismaService, UsersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(cors({ credentials: true, origin: 'http://localhost:3000' }))
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
