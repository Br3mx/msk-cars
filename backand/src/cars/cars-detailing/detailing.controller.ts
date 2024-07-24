import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { DetailingService } from './detailing.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { CreateDetailingDTO } from './dto/create-detailing.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as dotenv from 'dotenv';

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

  @Post(process.env.POST_DETAILING_URL)
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

    const id = uuidv4();
    const detailingData = {
      ...createDetailingDTO,
      img: img[0].filename,
      restImg: restImg
        ? JSON.stringify(restImg.map((file) => file.filename))
        : '[]',
      id,
    };

    return this.detailingService.createDetailing(detailingData);
  }
}
