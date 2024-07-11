import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './email.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('send')
  async sendMail(@Body() body: any) {
    try {
      const result = await this.mailService.sendMail(body);
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
