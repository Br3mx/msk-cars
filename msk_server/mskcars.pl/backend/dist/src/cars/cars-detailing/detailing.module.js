"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailingModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../../prisma/prisma.module");
const detailing_service_1 = require("./detailing.service");
const detailing_controller_1 = require("./detailing.controller");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let DetailingModule = class DetailingModule {
};
exports.DetailingModule = DetailingModule;
exports.DetailingModule = DetailingModule = __decorate([
    (0, common_1.Module)({
        providers: [detailing_service_1.DetailingService],
        controllers: [detailing_controller_1.DetailingController],
        imports: [
            prisma_module_1.PrismaModule,
            platform_express_1.MulterModule.register({
                storage: (0, multer_1.memoryStorage)(),
                limits: {
                    fileSize: 5 * 1024 * 1024,
                },
            }),
        ],
    })
], DetailingModule);
//# sourceMappingURL=detailing.module.js.map