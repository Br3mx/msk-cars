import { CarsDetailing } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateDetailingDTO } from './dto/update-detailing.dto';
export declare class DetailingService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<CarsDetailing[]>;
    getById(id: CarsDetailing['id']): Promise<CarsDetailing | null>;
    deleteDet(id: CarsDetailing['id']): Promise<CarsDetailing>;
    createDetailing(data: any): Promise<CarsDetailing>;
    updateDetailing(id: string, data: UpdateDetailingDTO): Promise<any>;
    private deleteImages;
}
