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
exports.JwtRoleStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_service_1 = require("../users/users.service");
let JwtRoleStrategy = class JwtRoleStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-role') {
    constructor(configService, usersService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                (request) => {
                    const token = request === null || request === void 0 ? void 0 : request.cookies['auth'];
                    if (!token) {
                        return null;
                    }
                    return token;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: configService.get('jwt.secret'),
        });
        this.configService = configService;
        this.usersService = usersService;
    }
    async validate(payload) {
        const user = await this.usersService.getUsersById(payload.sub);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (user.role.toUpperCase() !== 'ADMIN') {
            throw new common_1.UnauthorizedException('Insufficient permissions');
        }
        return user;
    }
};
exports.JwtRoleStrategy = JwtRoleStrategy;
exports.JwtRoleStrategy = JwtRoleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        users_service_1.UsersService])
], JwtRoleStrategy);
//# sourceMappingURL=jwt-role.strategy.js.map