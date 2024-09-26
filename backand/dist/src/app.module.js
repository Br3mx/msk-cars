"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const detailing_module_1 = require("./cars/cars-detailing/detailing.module");
const prisma_module_1 = require("./prisma/prisma.module");
const prisma_service_1 = require("./shared/services/prisma.service");
const cors = require("cors");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const email_module_1 = require("./email/email.module");
const users_controller_1 = require("./users/users.controller");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const export_module_1 = require("./cars/cars-exports/export.module");
const promotion_module_1 = require("./promotion/promotion.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(cors({ credentials: true, origin: 'http://localhost:3000' }))
            .forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            detailing_module_1.DetailingModule,
            export_module_1.ExportModule,
            email_module_1.MailModule,
            prisma_module_1.PrismaModule,
            promotion_module_1.PromotionModule,
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
                isGlobal: true,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, users_service_1.UsersService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map