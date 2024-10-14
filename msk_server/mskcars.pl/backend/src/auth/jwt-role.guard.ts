import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtRoleGuard extends AuthGuard('jwt-role') {}
