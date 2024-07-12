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
      const mailOptions = {
        from: email,
        to: process.env.MAIL_USER,
        subject: `MSK-CARS oto nowa wiadomość od ${name} ${surname}`,
        html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f6f6f6;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                text-align: center;
                padding-bottom: 20px;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                color: #333333;
              }
              .content p {
                font-size: 16px;
                line-height: 1.5;
                color: #333333;
              }
            h2 {
            text-align: center;
            }
              .content strong {
                color: #555555;
              }
              .footer {
                text-align: center;
                padding-top: 20px;
                font-size: 12px;
                color: #999999;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Wiadomość w sprawie <br/>
                ${title}</h1>
              </div>
              <div class="content">
              <h2>Dane Klienta :</h2>
              <ul>

                <li><p><strong>Imię:</strong> ${name}</p></li>
                <li><p><strong>Nazwisko:</strong> ${surname}</p></li>
                <li><p><strong>Email:</strong> ${email}</p></li>
                <li><p><strong>Telefon:</strong> ${phone}</p></li>
            </ul>
            <h2>Treść wiadomości:</h2>
                <p><strong>Temat:</strong> ${title}</p>
                <p><strong>Wiadomość:</strong></p>
                <p>${message}</p>
              </div>
              <div class="footer">
                <p>MSK-CARS</p>
              </div>
            </div>
          </body>
        </html>
      `,
      };

      await this.transporter.sendMail(mailOptions);
      return { message: 'Email został pomyślnie wysłany.' };
    } catch (error) {
      console.error('Szczegóły błędu:', error); // Logowanie szczegółów błędu
      throw new Error('Wystąpił błąd podczas wysyłania emaila.');
    }
  }
}
