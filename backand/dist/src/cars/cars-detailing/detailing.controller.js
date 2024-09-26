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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailingController = void 0;
const common_1 = require("@nestjs/common");
const detailing_service_1 = require("./detailing.service");
const platform_express_1 = require("@nestjs/platform-express");
const uuid_1 = require("uuid");
const create_detailing_dto_1 = require("./dto/create-detailing.dto");
const multer_1 = require("multer");
const path_1 = require("path");
const dotenv = require("dotenv");
const update_detailing_dto_1 = require("./dto/update-detailing.dto");
const jwt_role_guard_1 = require("../../auth/jwt-role.guard");
let DetailingController = class DetailingController {
    constructor(detailingService) {
        this.detailingService = detailingService;
        dotenv.config();
        this.detailingService = detailingService;
    }
    getAll() {
        return this.detailingService.getAll();
    }
    async getById(id) {
        const det = await this.detailingService.getById(id);
        if (!det)
            throw new common_1.NotFoundException('Car not found');
        return det;
    }
    async deleteDet(id) {
        if (!(await this.detailingService.getById(id)))
            throw new common_1.NotFoundException('Product not found');
        await this.detailingService.deleteDet(id);
        return { success: true };
    }
    async createDetailing({ img, restImg, }, createDetailingDTO) {
        console.log('Received DTO:', createDetailingDTO);
        console.log(img, restImg);
        const id = (0, uuid_1.v4)();
        const detailingData = Object.assign(Object.assign({}, createDetailingDTO), { img: img[0].filename, restImg: restImg
                ? JSON.stringify(restImg.map((file) => file.filename))
                : '[]', description: createDetailingDTO.description, id });
        return this.detailingService.createDetailing(detailingData);
    }
    async updateDetailing(id, { img, restImg, }, updateDetailingDTO) {
        const existingDetailing = await this.detailingService.getById(id);
        if (!existingDetailing)
            throw new common_1.NotFoundException('Detailing not found');
        const updatedDetailingData = Object.assign(Object.assign(Object.assign({}, existingDetailing), updateDetailingDTO), { img: img ? img[0].filename : existingDetailing.img, restImg: restImg
                ? JSON.stringify([
                    ...(typeof existingDetailing.restImg === 'string'
                        ? JSON.parse(existingDetailing.restImg || '[]')
                        : []),
                    ...restImg.map((file) => file.filename),
                ].filter((i) => !updateDetailingDTO.restImgToDelete.includes(i)))
                : JSON.stringify((typeof existingDetailing.restImg === 'string'
                    ? JSON.parse(existingDetailing.restImg || '[]')
                    : []).filter((i) => !updateDetailingDTO.restImgToDelete.includes(i))), description: updateDetailingDTO.description });
        return this.detailingService.updateDetailing(id, updatedDetailingData);
    }
};
exports.DetailingController = DetailingController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], DetailingController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DetailingController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(process.env.DELETE_DETAILING_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DetailingController.prototype, "deleteDet", null);
__decorate([
    (0, common_1.Post)(process.env.POST_DETAILING_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: './public/detailing/cars',
            filename: (req, file, cb) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                cb(null, uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_detailing_dto_1.CreateDetailingDTO]),
    __metadata("design:returntype", Promise)
], DetailingController.prototype, "createDetailing", null);
__decorate([
    (0, common_1.Put)(process.env.PUT_DETAILING_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: './public/detailing/cars',
            filename: (req, file, cb) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                cb(null, uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_detailing_dto_1.UpdateDetailingDTO]),
    __metadata("design:returntype", Promise)
], DetailingController.prototype, "updateDetailing", null);
exports.DetailingController = DetailingController = __decorate([
    (0, common_1.Controller)('detailing'),
    __metadata("design:paramtypes", [detailing_service_1.DetailingService])
], DetailingController);
//# sourceMappingURL=detailing.controller.js.map