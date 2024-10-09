"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
const fs = require("fs");
const path = require("path");
let PromotionService = class PromotionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getAll() {
        return this.prisma.promotion.findFirst();
    }
    async createPromotion(imagePath) {
        return await this.prisma.promotion.create({
            data: {
                promotionImg: imagePath,
            },
        });
    }
    async deletePromotion(id) {
        const promotion = await this.prisma.promotion.findUnique({
            where: { id },
        });
        if (!promotion) {
            throw new common_1.NotFoundException(`Promotion with ID ${id} not found`);
        }
        const fullImagePath = path.join(process.cwd(), 'img_content', 'promotion', promotion.promotionImg);
        if (fs.existsSync(fullImagePath)) {
            fs.unlinkSync(fullImagePath);
        }
        await this.prisma.promotion.delete({
            where: { id },
        });
    }
};
exports.PromotionService = PromotionService;
exports.PromotionService = PromotionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PromotionService);
//# sourceMappingURL=promotion.service.js.map