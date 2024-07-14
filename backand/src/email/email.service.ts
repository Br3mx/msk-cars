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
              @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400;700&display=swap');
            </style>
          </head>
          <body style="font-family: 'Chakra Petch', sans-serif; margin: 0; padding: 0;">
            <table width="100%" cellspacing="0" cellpadding="0" border="0" style="height: 100%; text-align: center; background-color: #f0f0f0;">
              <tr>
                <td align="center" style="padding: 20px 0;">
                  <table width="600px" cellpadding="0" cellspacing="0" border="0" style="border-radius: 10px; overflow: hidden; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); background-color: #ffffff;">
                    <tr>
                      <td align="center" style="padding: 20px 0; background-color: #005fa9; color: #ffffff;">
                        <h1>Wiadomość w sprawie : <br/><strong><i>${title}</i></strong></h1>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding: 20px;">
                        <h2>Dane Klienta:</h2>
                        <table width="80%" cellpadding="0" cellspacing="0" border="0" style="margin: 0 auto;">
                          <tr>
                            <td align="left"><strong>Imię:</strong></td>
                            <td align="left">${name}</td>
                          </tr>
                          <tr>
                            <td align="left"><strong>Nazwisko:</strong></td>
                            <td align="left">${surname}</td>
                          </tr>
                          <tr>
                            <td align="left"><strong>Email:</strong></td>
                            <td align="left">${email}</td>
                          </tr>
                          <tr>
                            <td align="left"><strong>Telefon:</strong></td>
                            <td align="left"><a href="tel:+48${phone}">+48${phone}</a></td>                          
                          </tr>
                        </table>
                        <h2>Treść wiadomości:</h2>
                        <p><strong>Wiadomość:</strong></p>
                        <p style="border: 2.5px solid #005fa9; border-radius: 10px; padding: 10px; width: 80%; margin: 0 auto;">${message}</p>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" style="padding: 20px; font-size: 12px; color: #999999;">
                        <p>MSK-CARS</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
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
