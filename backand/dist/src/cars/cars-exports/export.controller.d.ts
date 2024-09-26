import { CarsExportService } from './export.service';
import { CreateExportDTO } from './dto/create-carexport.dto';
import { UpdateExportDTO } from './dto/update-caresxport.dto';
export declare class CarsExportController {
    private exportService;
    constructor(exportService: CarsExportService);
    getAllExp(): any;
    getByIdExp(id: string): Promise<import(".prisma/client").CarsExport>;
    deleteExp(id: string): Promise<{
        success: boolean;
    }>;
    createExp({ img, restImg, }: {
        img: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, createExportDTO: CreateExportDTO): Promise<import(".prisma/client").CarsExport>;
    updateExp(id: string, { img, restImg, }: {
        img?: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, updateExportDTO: UpdateExportDTO): Promise<any>;
}
