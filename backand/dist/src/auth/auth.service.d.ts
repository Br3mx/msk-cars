import { RegisterDTO } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: RegisterDTO): Promise<void>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").Role;
    }>;
    createSession(user: any): Promise<{
        access_token: string;
    }>;
}
