import { PromotionService } from './promotion.service';
export declare class PromotionController {
    private readonly promotionService;
    constructor(promotionService: PromotionService);
    getAll(): any;
    uploadPromotion(file: Express.Multer.File): Promise<{
        message: string;
        promotion: import(".prisma/client").Promotion;
    }>;
    deletePromotion(id: string): Promise<{
        message: string;
    }>;
}
