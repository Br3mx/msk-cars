import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/services/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DetailingService } from './detailing.service';
import { DetailingController } from './detailing.controller';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  providers: [DetailingService],
  controllers: [DetailingController],
  imports: [
    PrismaModule,
    MulterModule.register({
      storage: memoryStorage(),
      limits: {
        fileSize: 5 * 1024 * 1024, // maksymalny rozmiar pliku 5MB
      },
    }),
  ],
})
export class DetailingModule {}
