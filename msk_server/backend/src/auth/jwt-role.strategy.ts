import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtRoleStrategy extends PassportStrategy(Strategy, 'jwt-role') {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const token = request?.cookies['auth'];
          if (!token) {
            return null;
          }
          return token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate(payload: any) {
    // Loguj payload, aby upewnić się, że zawiera oczekiwane dane

    // Pobieraj użytkownika na podstawie ID z payload
    const user = await this.usersService.getUsersById(payload.sub);

    // Sprawdzaj, czy użytkownik istnieje
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Loguj użytkownika, aby upewnić się, że dane zostały pobrane poprawnie
    // Sprawdzaj rolę użytkownika
    if (user.role.toUpperCase() !== 'ADMIN') {
      throw new UnauthorizedException('Insufficient permissions');
    }

    // Loguj, jeśli walidacja przebiegła pomyślnie

    return user;
  }
}
