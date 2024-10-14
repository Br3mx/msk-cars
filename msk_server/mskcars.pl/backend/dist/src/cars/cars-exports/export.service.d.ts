import { CarsExport } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { UpdateExportDTO } from './dto/update-caresxport.dto';
export declare class CarsExportService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllExp(): Promise<CarsExport[]>;
    getByIdExp(id: CarsExport['id']): Promise<CarsExport | null>;
    deleteExp(id: CarsExport['id']): Promise<CarsExport>;
    createExp(data: any): Promise<CarsExport>;
    updateExp(id: string, data: UpdateExportDTO): Promise<any>;
    private deleteImages;
}
