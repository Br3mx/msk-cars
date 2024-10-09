import { AuthService } from './auth.service';
import { RegisterDTO } from './dto/register-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerData: RegisterDTO): Promise<void>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
