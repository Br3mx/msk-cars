import { CarsExportService } from './export.service';
import { CreateExportDTO } from './dto/create-carexport.dto';
import { UpdateExportDTO } from './dto/update-caresxport.dto';
export declare class CarsExportController {
    private exportService;
    constructor(exportService: CarsExportService);
    getAllExp(): any;
    getByIdExp(id: string): Promise<{
        id: string;
        img: string;
        carMark: string;
        restImg: import("@prisma/client/runtime/library").JsonValue;
        description: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteExp(id: string): Promise<{
        success: boolean;
    }>;
    createExp({ img, restImg, }: {
        img: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, createExportDTO: CreateExportDTO): Promise<{
        id: string;
        img: string;
        carMark: string;
        restImg: import("@prisma/client/runtime/library").JsonValue;
        description: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateExp(id: string, { img, restImg, }: {
        img?: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, updateExportDTO: UpdateExportDTO): Promise<any>;
}
