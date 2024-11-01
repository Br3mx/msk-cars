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
exports.DetailingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../shared/services/prisma.service");
const fs = require("fs");
const path = require("path");
let DetailingService = class DetailingService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.carsDetailing.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    getById(id) {
        return this.prismaService.carsDetailing.findUnique({
            where: { id },
        });
    }
    async deleteDet(id) {
        const existingDetailing = await this.prismaService.carsDetailing.findUnique({
            where: { id },
        });
        if (!existingDetailing) {
            throw new common_1.NotFoundException('Detailing not found');
        }
        const filesToDelete = [];
        if (existingDetailing.img) {
            filesToDelete.push(existingDetailing.img);
        }
        if (existingDetailing.restImg) {
            const restImgArray = typeof existingDetailing.restImg === 'string'
                ? JSON.parse(existingDetailing.restImg)
                : existingDetailing.restImg;
            filesToDelete.push(...restImgArray);
        }
        if (filesToDelete.length > 0) {
            this.deleteImages(filesToDelete);
        }
        return this.prismaService.carsDetailing.delete({
            where: { id },
        });
    }
    async createDetailing(data) {
        try {
            const createdDetailing = await this.prismaService.carsDetailing.create({
                data: Object.assign(Object.assign({}, data), { description: typeof data.description === 'string'
                        ? JSON.parse(data.description)
                        : data.description }),
            });
            return createdDetailing;
        }
        catch (error) {
            console.error('Error creating detailing:', error);
            throw new Error('Failed to create detailing');
        }
    }
    async updateDetailing(id, data) {
        console.log('Updating detailing with ID:', id);
        console.log('Data to update:', data);
        const existingDetailing = await this.prismaService.carsDetailing.findUnique({
            where: { id },
        });
        console.log('Found existing detailing:', existingDetailing);
        if (!existingDetailing) {
            console.error('Detailing not found for ID:', id);
            throw new common_1.NotFoundException('Detailing not found');
        }
        console.log(data.restImgToDelete);
        if (data.restImgToDelete && data.restImgToDelete.length > 0) {
            console.log('Deleting images:', data.restImgToDelete);
            this.deleteImages(data.restImgToDelete);
        }
        delete data.restImgToDelete;
        try {
            const updatedDetailing = await this.prismaService.carsDetailing.update({
                where: { id },
                data: Object.assign(Object.assign({}, data), { description: typeof data.description === 'string'
                        ? JSON.parse(data.description)
                        : data.description }),
            });
            console.log('Updated detailing:', updatedDetailing);
            return updatedDetailing;
        }
        catch (error) {
            console.error('Error updating detailing:', error);
            throw new Error('Failed to update detailing');
        }
    }
    deleteImages(files) {
        console.log('folder delete ', __dirname);
        try {
            files.forEach((file) => {
                const filePath = path.join('./img_content/detailing/cars', file);
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
exports.DetailingService = DetailingService;
exports.DetailingService = DetailingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DetailingService);
//# sourceMappingURL=detailing.service.js.map