export declare class MailService {
    private readonly transporter;
    constructor();
    sendMail({ name, surname, email, phone, title, message }: {
        name: any;
        surname: any;
        email: any;
        phone: any;
        title: any;
        message: any;
    }): Promise<{
        message: string;
    }>;
}
