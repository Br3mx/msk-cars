import { Injectable, NotFoundException } from '@nestjs/common';
import { CarsExport } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateExportDTO } from './dto/update-caresxport.dto';
import * as fs from 'fs';
import * as path from 'path';
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

    console.log('Found existing detailing:', existingExp);

    if (!existingExp) {
      console.error('export not found for ID:', id);
      throw new NotFoundException('export not found');
    }

    // Usuwanie plików
    if (data.restImgToDelete && data.restImgToDelete.length > 0) {
      console.log('Deleting images:', data.restImgToDelete);
      this.deleteImages(data.restImgToDelete);
    }

    delete data.restImgToDelete;

    try {
      const updatedExp = await this.prismaService.carsExport.update({
        where: { id },
        data: {
          ...data,
          description:
            typeof data.description === 'string'
              ? JSON.parse(data.description)
              : data.description,
        },
      });
      console.log('Updated export:', updatedExp);
      return updatedExp;
    } catch (error) {
      console.error('Error updating export:', error);
      throw new Error('Failed to update export');
    }
  }

  private deleteImages(files: string[]) {
    try {
      files.forEach((file) => {
        const filePath = path.join(__dirname, './public/export/cars', file);
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
