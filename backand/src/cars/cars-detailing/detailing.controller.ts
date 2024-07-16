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
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { v4 as uuidv4 } from 'uuid';
import { CreateDetailingDTO } from './dto/create-detailing.dto';
@Controller('detailing')
export class DetailingController {
  constructor(private detailingService: DetailingService) {
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

  @Post('create')
  @UseInterceptors(FileInterceptor('img'), FilesInterceptor('restImg', 10))
  async createDetailing(
    @UploadedFile() img: Express.Multer.File,
    @UploadedFiles() restImg: Express.Multer.File[],
    @Body() createDetailingDTO: CreateDetailingDTO,
  ) {
    console.log('Received DTO:', createDetailingDTO);
    const id = uuidv4();
    const detailingData = {
      ...createDetailingDTO,
      img: img.filename, // Załóżmy, że img zawiera nazwę pliku głównego obrazu
      restImg: restImg.map((file) => file.filename), // Przekształć tablicę plików w tablicę nazw plików
      id,
    };

    return this.detailingService.createDetailing(detailingData);
  }
}
