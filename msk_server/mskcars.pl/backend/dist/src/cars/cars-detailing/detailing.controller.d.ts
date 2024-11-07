import { DetailingService } from './detailing.service';
import { CreateDetailingDTO } from './dto/create-detailing.dto';
import { UpdateDetailingDTO } from './dto/update-detailing.dto';
export declare class DetailingController {
    private detailingService;
    constructor(detailingService: DetailingService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        img: string;
        carMark: string;
        restImg: import("@prisma/client/runtime/library").JsonValue;
        description: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteDet(id: string): Promise<{
        success: boolean;
    }>;
    createDetailing({ img, restImg, }: {
        img: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, createDetailingDTO: CreateDetailingDTO): Promise<{
        id: string;
        img: string;
        carMark: string;
        restImg: import("@prisma/client/runtime/library").JsonValue;
        description: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateDetailing(id: string, { img, restImg, }: {
        img?: Express.Multer.File;
        restImg?: Express.Multer.File[];
    }, updateDetailingDTO: UpdateDetailingDTO): Promise<any>;
}