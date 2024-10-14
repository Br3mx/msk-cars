import { MailService } from './email.service';
import { CreateEmailDTO } from './dtos/create-emaildto';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    create(emailData: CreateEmailDTO): Promise<{
        message: string;
    }>;
}
