import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsDetailing } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateDetailingDTO } from './dto/update-detailing.dto';

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
  public deleteDet(id: CarsDetailing['id']): Promise<CarsDetailing> {
    return this.prismaService.carsDetailing.delete({
      where: { id },
    });
  }
  async createDetailing(data: any): Promise<CarsDetailing> {
    try {
      const createdDetailing = await this.prismaService.carsDetailing.create({
        data,
      });
      return createdDetailing;
    } catch (error) {
      console.error('Error creating detailing:', error);
      throw new Error('Failed to create detailing');
    }
  }

  async updateDetailing(id: string, data: UpdateDetailingDTO): Promise<any> {
    const existingDetailing = await this.prismaService.carsDetailing.findUnique(
      { where: { id } },
    );

    if (!existingDetailing) {
      throw new NotFoundException('Detailing not found');
    }

    return this.prismaService.carsDetailing.update({
      where: { id },
      data: {
        ...data,
        description:
          typeof data.description === 'string'
            ? JSON.parse(data.description)
            : data.description,
      },
    });
  }
}
