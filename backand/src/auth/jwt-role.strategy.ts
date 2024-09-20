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
          const data = request?.cookies['auth'];
          console.log('JWT from cookies:', data);
          if (!data) {
            return null;
          }
          return data.access_token;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate(payload: any) {
    // Loguj payload, aby upewnić się, że zawiera oczekiwane dane
    console.log('Received payload:', payload);

    // Pobieraj użytkownika na podstawie ID z payload
    const user = await this.usersService.getUsersById(payload.sub);

    // Sprawdzaj, czy użytkownik istnieje
    if (!user) {
      console.log('User not found for ID:', payload.sub);
      throw new UnauthorizedException('User not found');
    }

    // Loguj użytkownika, aby upewnić się, że dane zostały pobrane poprawnie
    console.log('Found user:', user);

    // Sprawdzaj rolę użytkownika
    if (user.role !== 'ADMIN') {
      console.log('Insufficient permissions for user:', user.id);
      throw new UnauthorizedException('Insufficient permissions');
    }

    // Loguj, jeśli walidacja przebiegła pomyślnie
    console.log('User validated successfully:', user);

    return user;
  }
}
