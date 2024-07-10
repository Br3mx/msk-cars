import { Module } from '@nestjs/common';

import { PrismaService } from 'src/shared/services/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DetailingService } from './detailing.service';
import { DetailingController } from './detailing.controller';

@Module({
  providers: [DetailingService],
  controllers: [DetailingController],
  imports: [PrismaModule],
})
export class DetailingModule {}
