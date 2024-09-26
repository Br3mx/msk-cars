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
exports.MailController = void 0;
const common_1 = require("@nestjs/common");
const email_service_1 = require("./email.service");
const create_emaildto_1 = require("./dtos/create-emaildto");
let MailController = class MailController {
    constructor(mailService) {
        this.mailService = mailService;
    }
    create(emailData) {
        return this.mailService.sendMail(emailData);
    }
};
exports.MailController = MailController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emaildto_1.CreateEmailDTO]),
    __metadata("design:returntype", void 0)
], MailController.prototype, "create", null);
exports.MailController = MailController = __decorate([
    (0, common_1.Controller)('mail'),
    __metadata("design:paramtypes", [email_service_1.MailService])
], MailController);
//# sourceMappingURL=email.controller.js.map