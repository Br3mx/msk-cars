import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsExport } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateExportDTO } from './dto/update-caresxport.dto';

@Injectable()
export class CarsExportService {
  constructor(private prismaService: PrismaService) {}
  public getAllExp(): Promise<CarsExport[]> {
    return this.prismaService.carsExport.findMany();
  }
  public getByIdExp(id: CarsExport['id']): Promise<CarsExport | null> {
    return this.prismaService.carsExport.findUnique({
      where: { id },
    });
  }
  public deleteExp(id: CarsExport['id']): Promise<CarsExport> {
    return this.prismaService.carsExport.delete({
      where: { id },
    });
  }
  async createExp(data: any): Promise<CarsExport> {
    try {
      const createdExp = await this.prismaService.carsExport.create({
        data: {
          ...data,
          description:
            typeof data.description === 'string'
              ? JSON.parse(data.description)
              : data.description,
        },
      });
      return createdExp;
    } catch (error) {
      console.error('Error creating detailing:', error);
      throw new Error('Failed to create detailing');
    }
  }

  async updateExp(id: string, data: UpdateExportDTO): Promise<any> {
    const existingExp = await this.prismaService.carsExport.findUnique({
      where: { id },
    });

    if (!existingExp) {
      throw new NotFoundException('Detailing not found');
    }

    return this.prismaService.carsExport.update({
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
