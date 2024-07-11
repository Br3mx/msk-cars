import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
@Injectable()
export class MailService {
  private readonly transporter;

  constructor() {
    dotenv.config();
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendMail({ name, surname, email, phone, title, message }) {
    try {
      dotenv.config();
      const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `Nowa wiadomość od ${name} ${surname}`,
        html: `
          <p><strong>Imię:</strong> ${name}</p>
          <p><strong>Nazwisko:</strong> ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Temat:</strong> ${title}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message}</p>
        `,
      };

      await this.transporter.sendMail(mailOptions);
      return { message: 'Email został pomyślnie wysłany.' };
    } catch (error) {
      throw new Error('Wystąpił błąd podczas wysyłania emaila.');
    }
  }
}
