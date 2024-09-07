import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Promotion } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PromotionService {
  constructor(private prisma: PrismaService) {}

  // Method to create/upload a new promotion with an image
  async createPromotion(imagePath: string): Promise<Promotion> {
    return await this.prisma.promotion.create({
      data: {
        promotionImg: imagePath,
      },
    });
  }

  // Method to delete a promotion by ID
  async deletePromotion(id: string): Promise<void> {
    const promotion = await this.prisma.promotion.findUnique({
      where: { id },
    });

    if (!promotion) {
      throw new NotFoundException(`Promotion with ID ${id} not found`);
    }

    // Delete the image file from the server
    const fullImagePath = path.join(
      __dirname,
      './public/promotion',
      promotion.promotionImg,
    );
    if (fs.existsSync(fullImagePath)) {
      fs.unlinkSync(fullImagePath);
    }

    // Remove the promotion entry from the database
    await this.prisma.promotion.delete({
      where: { id },
    });
  }
}
