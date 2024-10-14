import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
