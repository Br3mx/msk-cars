import { Module } from '@nestjs/common';
import { MailService } from './email.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailController } from './email.controller';

@Module({
  providers: [MailService],
  controllers: [MailController],
  imports: [PrismaModule],
})
export class MailModule {}
