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
exports.JwtAdminAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./jwt-auth.guard");
const users_service_1 = require("../users/users.service");
const common_2 = require("@nestjs/common");
let JwtAdminAuthGuard = class JwtAdminAuthGuard extends jwt_auth_guard_1.JwtAuthGuard {
    constructor(usersService) {
        super();
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.getUsersById(payload.sub);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (user.role !== 'ADMIN') {
            throw new common_1.UnauthorizedException('You do not have permission to access this resource');
        }
        return user;
    }
};
exports.JwtAdminAuthGuard = JwtAdminAuthGuard;
exports.JwtAdminAuthGuard = JwtAdminAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.Inject)(users_service_1.UsersService)),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], JwtAdminAuthGuard);
//# sourceMappingURL=admin-auth.guard.js.map