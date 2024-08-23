import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsDetailing } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateDetailingDTO } from './dto/update-detailing.dto';
import * as fs from 'fs';
import * as path from 'path';
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
        data: {
          ...data,
          description:
            typeof data.description === 'string'
              ? JSON.parse(data.description)
              : data.description,
        },
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

    // Usuwanie plików
    if (data.restImgToDelete && data.restImgToDelete.length > 0) {
      this.deleteImages(data.restImgToDelete);
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

  private deleteImages(files: string[]) {
    files.forEach((file) => {
      const filePath = path.join(__dirname, './public/detailing/cars', file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error while deleting file: ${file}`, err);
        } else {
          console.log(`File deleted: ${file}`);
        }
      });
    });
  }
}
