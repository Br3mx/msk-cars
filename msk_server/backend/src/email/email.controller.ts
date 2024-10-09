import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './email.service';
import { CreateEmailDTO } from './dtos/create-emaildto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  create(@Body() emailData: CreateEmailDTO) {
    return this.mailService.sendMail(emailData);
  }
}
