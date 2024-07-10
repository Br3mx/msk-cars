import { Injectable } from '@nestjs/common';
import { CarsDetailing } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class DetailingService {
  constructor(private prismaService: PrismaService) {}
  public getAll(): Promise<CarsDetailing[]> {
    return this.prismaService.carsDetailing.findMany();
  }
  public getById(id: CarsDetailing['id']): Promise<CarsDetailing | null> {
    return this.prismaService.carsDetailing.findUnique({
      where: { id },
    });
  }
}
