import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
import { Inject } from '@nestjs/common';

@Injectable()
export class JwtAdminAuthGuard extends JwtAuthGuard {
  constructor(
    @Inject(UsersService) private readonly usersService: UsersService,
  ) {
    super();
  }

  async validate(payload: any) {
    const user = await this.usersService.getUsersById(payload.sub);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    // Sprawdzenie, czy użytkownik jest administratorem
    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException(
        'You do not have permission to access this resource',
      );
    }

    return user;
  }
}
