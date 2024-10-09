import { PrismaService } from 'src/shared/services/prisma.service';
import { Promotion } from '@prisma/client';
export declare class PromotionService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Promotion>;
    createPromotion(imagePath: string): Promise<Promotion>;
    deletePromotion(id: string): Promise<void>;
}
