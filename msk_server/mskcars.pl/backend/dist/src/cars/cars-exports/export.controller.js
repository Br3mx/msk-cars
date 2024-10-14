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
exports.CarsExportController = void 0;
const common_1 = require("@nestjs/common");
const export_service_1 = require("./export.service");
const platform_express_1 = require("@nestjs/platform-express");
const uuid_1 = require("uuid");
const create_carexport_dto_1 = require("./dto/create-carexport.dto");
const multer_1 = require("multer");
const path_1 = require("path");
const dotenv = require("dotenv");
const update_caresxport_dto_1 = require("./dto/update-caresxport.dto");
const jwt_role_guard_1 = require("../../auth/jwt-role.guard");
let CarsExportController = class CarsExportController {
    constructor(exportService) {
        this.exportService = exportService;
        dotenv.config();
        this.exportService = exportService;
    }
    getAllExp() {
        return this.exportService.getAllExp();
    }
    async getByIdExp(id) {
        const det = await this.exportService.getByIdExp(id);
        if (!det)
            throw new common_1.NotFoundException('Car not found');
        return det;
    }
    async deleteExp(id) {
        if (!(await this.exportService.getByIdExp(id)))
            throw new common_1.NotFoundException('Product not found');
        await this.exportService.deleteExp(id);
        return { success: true };
    }
    async createExp({ img, restImg, }, createExportDTO) {
        console.log('Received DTO:', createExportDTO);
        console.log(img, restImg);
        const id = (0, uuid_1.v4)();
        const detailingData = Object.assign(Object.assign({}, createExportDTO), { img: img[0].filename, restImg: restImg
                ? JSON.stringify(restImg.map((file) => file.filename))
                : '[]', description: createExportDTO.description, id });
        return this.exportService.createExp(detailingData);
    }
    async updateExp(id, { img, restImg, }, updateExportDTO) {
        const existingExp = await this.exportService.getByIdExp(id);
        if (!existingExp)
            throw new common_1.NotFoundException('Export car not found');
        const updatedExportData = Object.assign(Object.assign(Object.assign({}, existingExp), updateExportDTO), { img: img ? img[0].filename : existingExp.img, restImg: restImg
                ? JSON.stringify([
                    ...(typeof existingExp.restImg === 'string'
                        ? JSON.parse(existingExp.restImg || '[]')
                        : []),
                    ...restImg.map((file) => file.filename),
                ].filter((i) => !updateExportDTO.restImgToDelete.includes(i)))
                : JSON.stringify((typeof existingExp.restImg === 'string'
                    ? JSON.parse(existingExp.restImg || '[]')
                    : []).filter((i) => !updateExportDTO.restImgToDelete.includes(i))), description: updateExportDTO.description });
        return this.exportService.updateExp(id, updatedExportData);
    }
};
exports.CarsExportController = CarsExportController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CarsExportController.prototype, "getAllExp", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsExportController.prototype, "getByIdExp", null);
__decorate([
    (0, common_1.Delete)(process.env.DELETE_EXPORT_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarsExportController.prototype, "deleteExp", null);
__decorate([
    (0, common_1.Post)(process.env.POST_EXPORT_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: '../../img_content/export/cars',
            filename: (req, file, cb) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                cb(null, uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_carexport_dto_1.CreateExportDTO]),
    __metadata("design:returntype", Promise)
], CarsExportController.prototype, "createExp", null);
__decorate([
    (0, common_1.Put)(process.env.PUT_EXPORT_URL),
    (0, common_1.UseGuards)(jwt_role_guard_1.JwtRoleGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'img', maxCount: 1 },
        { name: 'restImg', maxCount: 10 },
    ], {
        storage: (0, multer_1.diskStorage)({
            destination: '../../img_content/export/cars',
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
    __metadata("design:paramtypes", [String, Object, update_caresxport_dto_1.UpdateExportDTO]),
    __metadata("design:returntype", Promise)
], CarsExportController.prototype, "updateExp", null);
exports.CarsExportController = CarsExportController = __decorate([
    (0, common_1.Controller)('export'),
    __metadata("design:paramtypes", [export_service_1.CarsExportService])
], CarsExportController);
//# sourceMappingURL=export.controller.js.map