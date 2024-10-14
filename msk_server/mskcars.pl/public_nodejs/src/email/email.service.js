"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
let MailService = class MailService {
    constructor() {
        dotenv.config();
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.MAIL_MSK_USER,
                pass: process.env.MAIL_MSK_PASS,
            },
        });
    }
    async sendMail({ name, surname, email, phone, title, message }) {
        try {
            const mailOptions = {
                from: email,
                to: process.env.MAIL_MSK_USER,
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
            const savedMail = await prisma.mail.create({
                data: {
                    name,
                    surname,
                    email,
                    phone,
                    title,
                    message,
                },
            });
            const confirmationMailOptions = {
                from: process.env.MAIL_MSK_USER,
                to: email,
                subject: 'Potwierdzenie otrzymania wiadomości - MSK-CARS',
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
                          <h1>Dziękujemy za wiadomość!</h1>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style="padding: 20px;">
                          <p>Szanowny/a ${name} ${surname},</p>
                          <p>Otrzymaliśmy Twoją wiadomość w sprawie "<strong>${title}</strong>".</p>
                          <p>Skontaktujemy się z Tobą wkrótce w odpowiedzi na Twoje zapytanie.</p>
                          <br/>
                          <p><strong>Treść Twojej wiadomości:</strong></p>
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
            await this.transporter.sendMail(confirmationMailOptions);
            return { message: 'Email został pomyślnie wysłany.' };
        }
        catch (error) {
            console.error('Szczegóły błędu:', error);
            throw new Error('Wystąpił błąd podczas wysyłania emaila.');
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
//# sourceMappingURL=email.service.js.map