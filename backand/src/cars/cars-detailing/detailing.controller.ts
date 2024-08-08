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
import { DetailingService } from './detailing.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { CreateDetailingDTO } from './dto/create-detailing.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as dotenv from 'dotenv';
import { UpdateDetailingDTO } from './dto/update-detailing.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AdminAuthGuard } from 'src/auth/admin-auth.guard';

@Controller('detailing')
export class DetailingController {
  constructor(private detailingService: DetailingService) {
    dotenv.config();
    this.detailingService = detailingService;
  }
  @Get('/')
  getAll(): any {
    return this.detailingService.getAll();
  }
  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const det = await this.detailingService.getById(id);
    if (!det) throw new NotFoundException('Car not found');
    return det;
  }
  @Delete(process.env.DELETE_DETAILING_URL)
  //@UseGuards(AdminAuthGuard)
  //@UseGuards(JwtAuthGuard)
  async deleteDet(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.detailingService.getById(id)))
      throw new NotFoundException('Product not found');
    await this.detailingService.deleteDet(id);
    return { success: true };
  }

  @Post(process.env.POST_DETAILING_URL)
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
          destination: './public/detailing/cars',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
            cb(null, uniqueSuffix);
          },
        }),
      },
    ),
  )
  async createDetailing(
    @UploadedFiles()
    {
      img,
      restImg,
    }: { img: Express.Multer.File; restImg?: Express.Multer.File[] },
    @Body() createDetailingDTO: CreateDetailingDTO,
  ) {
    console.log('Received DTO:', createDetailingDTO);
    console.log(img, restImg);
    const descriptionArray = createDetailingDTO.description
      .split(',')
      .map((item) => item.trim());

    const id = uuidv4();
    const detailingData = {
      ...createDetailingDTO,
      img: img[0].filename,
      restImg: restImg
        ? JSON.stringify(restImg.map((file) => file.filename))
        : '[]',
      description: JSON.stringify(descriptionArray),
      id,
    };

    return this.detailingService.createDetailing(detailingData);
  }

  @Put(process.env.PUT_DETAILING_URL)
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
          destination: './public/detailing/cars',
          filename: (req, file, cb) => {
            const uniqueSuffix = `${uuidv4()}${extname(file.originalname)}`;
            cb(null, uniqueSuffix);
          },
        }),
      },
    ),
  )
  async updateDetailing(
    @Param('id', new ParseUUIDPipe()) id: string,
    @UploadedFiles()
    {
      img,
      restImg,
    }: { img?: Express.Multer.File; restImg?: Express.Multer.File[] },
    @Body() updateDetailingDTO: UpdateDetailingDTO,
  ) {
    const existingDetailing = await this.detailingService.getById(id);
    if (!existingDetailing) throw new NotFoundException('Detailing not found');

    const updatedDetailingData = {
      ...existingDetailing,
      ...updateDetailingDTO,
      img: img ? img[0].filename : existingDetailing.img,
      restImg: restImg
        ? JSON.stringify(restImg.map((file) => file.filename))
        : existingDetailing.restImg,
      description: updateDetailingDTO.description, // Już obsługiwane jako tablica
    };

    return this.detailingService.updateDetailing(id, updatedDetailingData);
  }
}
