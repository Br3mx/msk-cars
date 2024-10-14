import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [UsersService],
  imports: [PrismaModule],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
