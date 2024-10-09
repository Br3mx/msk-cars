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
    return this.prismaService.carsDetailing.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
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
    console.log('Updating detailing with ID:', id);
    console.log('Data to update:', data);

    const existingDetailing = await this.prismaService.carsDetailing.findUnique(
      { where: { id } },
    );

    console.log('Found existing detailing:', existingDetailing);

    if (!existingDetailing) {
      console.error('Detailing not found for ID:', id);
      throw new NotFoundException('Detailing not found');
    }

    // Usuwanie plików
    if (data.restImgToDelete && data.restImgToDelete.length > 0) {
      console.log('Deleting images:', data.restImgToDelete);
      this.deleteImages(data.restImgToDelete);
    }

    delete data.restImgToDelete;

    try {
      const updatedDetailing = await this.prismaService.carsDetailing.update({
        where: { id },
        data: {
          ...data,
          description:
            typeof data.description === 'string'
              ? JSON.parse(data.description)
              : data.description,
        },
      });
      console.log('Updated detailing:', updatedDetailing);
      return updatedDetailing;
    } catch (error) {
      console.error('Error updating detailing:', error);
      throw new Error('Failed to update detailing');
    }
  }

  private deleteImages(files: string[]) {
    try {
      files.forEach((file) => {
        const filePath = path.join(__dirname, './img_content/detailing/cars', file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error while deleting file: ${file}`, err);
          } else {
            console.log(`File deleted: ${file}`);
          }
        });
      });
    } catch (e) {
      console.log('Error while deleting files', e);
    }
  }
}
