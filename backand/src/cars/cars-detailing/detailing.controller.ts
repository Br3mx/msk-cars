import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { DetailingService } from './detailing.service';

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
}
