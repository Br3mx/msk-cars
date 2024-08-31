import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CarsExportService } from './export.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { CreateExportDTO } from './dto/create-carexport.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as dotenv from 'dotenv';
import { UpdateExportDTO } from './dto/update-caresxport.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('export')
export class CarsExportController {
  constructor(private exportService: CarsExportService) {
    dotenv.config();
    this.exportService = exportService;
  }
  @Get('/')
  getAllExp(): any {
    return this.exportService.getAllExp();
  }
  @Get('/:id')
  async getByIdExp(@Param('id', new ParseUUIDPipe()) id: string) {
    const det = await this.exportService.getByIdExp(id);
    if (!det) throw new NotFoundException('Car not found');
    return det;
  }
  @Delete(process.env.DELETE_EXPORT_URL)
  //@UseGuards(AdminAuthGuard)
  //@UseGuards(JwtAuthGuard)
  async deleteExp(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.exportService.getByIdExp(id)))
      throw new NotFoundException('Product not found');
    await this.exportService.deleteExp(id);
    return { success: true };
  }

  @Post(process.env.POST_EXPORT_URL)
  //@UseGuards(AdminAuthGuard)
  //@UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
      ],
      {
        storage: diskStorage({
          destination: './public/export/cars',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
            cb(null, uniqueSuffix);
          },
        }),
      },
    ),
  )
  async createExp(
    @UploadedFiles()
    {
      img,
      restImg,
    }: { img: Express.Multer.File; restImg?: Express.Multer.File[] },
    @Body() createExportDTO: CreateExportDTO,
  ) {
    console.log('Received DTO:', createExportDTO);
    console.log(img, restImg);

    const id = uuidv4();
    const detailingData = {
      ...createExportDTO,
      img: img[0].filename,
      restImg: restImg
        ? JSON.stringify(restImg.map((file) => file.filename))
        : '[]',
      description: createExportDTO.description,
      id,
    };

    return this.exportService.createExp(detailingData);
  }

  @Put(process.env.PUT_EXPORT_URL)
  //@UseGuards(AdminAuthGuard)
  //@UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
      ],
      {
        storage: diskStorage({
          destination: './public/export/cars',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
            cb(null, uniqueSuffix);
          },
        }),
      },
    ),
  )
  async updateExp(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFiles()
    {
      img,
      restImg,
    }: { img?: Express.Multer.File; restImg?: Express.Multer.File[] },
    @Body() updateExportDTO: UpdateExportDTO,
  ) {
    const existingExp = await this.exportService.getByIdExp(id);
    if (!existingExp) throw new NotFoundException('Export car not found');

    const updatedExportData = {
      ...existingExp,
      ...updateExportDTO,
      img: img ? img[0].filename : existingExp.img,
      restImg: restImg
        ? JSON.stringify(
            [
              ...(typeof existingExp.restImg === 'string'
                ? JSON.parse(existingExp.restImg || '[]')
                : []),
              ...restImg.map((file) => file.filename),
            ].filter((i) => !updateExportDTO.restImgToDelete.includes(i)),
          )
        : JSON.stringify(
            (typeof existingExp.restImg === 'string'
              ? JSON.parse(existingExp.restImg || '[]')
              : []
            ).filter((i) => !updateExportDTO.restImgToDelete.includes(i)),
          ),
      description: updateExportDTO.description,
    };

    return this.exportService.updateExp(id, updatedExportData);
  }
}
