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
exports.CarsExportService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const fs = require("fs");
const path = require("path");
let CarsExportService = class CarsExportService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAllExp() {
        return this.prismaService.carsExport.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    getByIdExp(id) {
        return this.prismaService.carsExport.findUnique({
            where: { id },
        });
    }
    deleteExp(id) {
        return this.prismaService.carsExport.delete({
            where: { id },
        });
    }
    async createExp(data) {
        try {
            const createdExp = await this.prismaService.carsExport.create({
                data: Object.assign(Object.assign({}, data), { description: typeof data.description === 'string'
                        ? JSON.parse(data.description)
                        : data.description }),
            });
            return createdExp;
        }
        catch (error) {
            console.error('Error creating detailing:', error);
            throw new Error('Failed to create detailing');
        }
    }
    async updateExp(id, data) {
        const existingExp = await this.prismaService.carsExport.findUnique({
            where: { id },
        });
        console.log('Found existing detailing:', existingExp);
        if (!existingExp) {
            console.error('export not found for ID:', id);
            throw new common_1.NotFoundException('export not found');
        }
        if (data.restImgToDelete && data.restImgToDelete.length > 0) {
            console.log('Deleting images:', data.restImgToDelete);
            this.deleteImages(data.restImgToDelete);
        }
        delete data.restImgToDelete;
        try {
            const updatedExp = await this.prismaService.carsExport.update({
                where: { id },
                data: Object.assign(Object.assign({}, data), { description: typeof data.description === 'string'
                        ? JSON.parse(data.description)
                        : data.description }),
            });
            console.log('Updated export:', updatedExp);
            return updatedExp;
        }
        catch (error) {
            console.error('Error updating export:', error);
            throw new Error('Failed to update export');
        }
    }
    deleteImages(files) {
        try {
            files.forEach((file) => {
                const filePath = path.join(__dirname, './img_content/export/cars', file);
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error(`Error while deleting file: ${file}`, err);
                    }
                    else {
                        console.log(`File deleted: ${file}`);
                    }
                });
            });
        }
        catch (e) {
            console.log('Error while deleting files', e);
        }
    }
};
exports.CarsExportService = CarsExportService;
exports.CarsExportService = CarsExportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarsExportService);
//# sourceMappingURL=export.service.js.map