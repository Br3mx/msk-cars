import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from 'src/users/users.service';
export declare class JwtAdminAuthGuard extends JwtAuthGuard {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: any): Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
