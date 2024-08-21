import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { CarsExportService } from './export.service';
import { CarsExportController } from './export.controller';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  providers: [CarsExportService],
  controllers: [CarsExportController],
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
export class ExportModule {}
