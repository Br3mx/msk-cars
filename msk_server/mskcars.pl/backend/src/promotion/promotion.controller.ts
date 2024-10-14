import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Delete,
  Param,
  HttpStatus,
  HttpException,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { PromotionService } from './promotion.service';
import { extname } from 'path';
import { JwtAdminAuthGuard } from 'src/auth/admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtRoleGuard } from 'src/auth/jwt-role.guard';

@Controller('promotions')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Get('/')
  getAll(): any {
    return this.promotionService.getAll();
  }

  @Post('upload')
  @UseGuards(JwtRoleGuard)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: '../../img_content/promotion',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          cb(
            new HttpException('Unsupported file type', HttpStatus.BAD_REQUEST),
            false,
          );
        }
        cb(null, true);
      },
    }),
  )
  async uploadPromotion(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
    }

    const promotion = await this.promotionService.createPromotion(
      file.filename,
    );
    return {
      message: 'Promotion created successfully',
      promotion,
    };
  }

  // DELETE: Delete promotion by ID
  @Delete(':id')
  @UseGuards(JwtRoleGuard)
  async deletePromotion(@Param('id') id: string) {
    await this.promotionService.deletePromotion(id);
    return { message: 'Promotion deleted successfully' };
  }
}
