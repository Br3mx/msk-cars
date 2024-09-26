import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class UsersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllUsers(): Promise<User[]>;
    getUsersById(id: User['id']): Promise<User | null>;
    getByEmail(email: User['email']): Promise<(User & {
        password: Password;
    }) | null>;
    addNewUser(userData: Omit<User, 'id' | 'role'>, password: Password['hashedPassword']): Promise<User>;
    updateUserById(id: User['id'], userData: Omit<User, 'id' | 'role'>, password: Password['hashedPassword'] | undefined): Promise<User>;
    deleteUserById(id: User['id']): Promise<User>;
}
