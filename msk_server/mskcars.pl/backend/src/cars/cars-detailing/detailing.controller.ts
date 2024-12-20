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
import { JwtRoleGuard } from 'src/auth/jwt-role.guard';

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
  @UseGuards(JwtRoleGuard)
  async deleteDet(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!(await this.detailingService.getById(id))) {
      throw new NotFoundException('Product not found');
    }
    await this.detailingService.deleteDet(id);
    return { success: true };
  }

  @Post(process.env.POST_DETAILING_URL)
  @UseGuards(JwtRoleGuard)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
      ],
      {
        storage: diskStorage({
          destination: './img_content/detailing/cars',
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

    const id = uuidv4();
    const detailingData = {
      ...createDetailingDTO,
      img: img[0].filename,
      restImg: restImg
        ? JSON.stringify(restImg.map((file) => file.filename))
        : '[]',
      description: createDetailingDTO.description,
      id,
    };

    return this.detailingService.createDetailing(detailingData);
  }

  @Put(process.env.PUT_DETAILING_URL)
  @UseGuards(JwtRoleGuard)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
      ],
      {
        storage: diskStorage({
          destination: './img_content/detailing/cars',
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
        ? JSON.stringify(
            [
              ...(typeof existingDetailing.restImg === 'string'
                ? JSON.parse(existingDetailing.restImg || '[]')
                : []),
              ...restImg.map((file) => file.filename),
            ].filter((i) => !updateDetailingDTO.restImgToDelete.includes(i)), // Usuń przecinek tutaj
          )
        : JSON.stringify(
            (typeof existingDetailing.restImg === 'string'
              ? JSON.parse(existingDetailing.restImg || '[]')
              : []
            ).filter((i) => !updateDetailingDTO.restImgToDelete.includes(i)), // Usuń przecinek tutaj
          ),

      description: updateDetailingDTO.description,
    };

    return this.detailingService.updateDetailing(id, updatedDetailingData);
  }
}
