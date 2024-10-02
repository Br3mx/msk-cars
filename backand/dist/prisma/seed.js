"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getCarsExports() {
    return [];
}
function getCarsDetailing() {
    return [];
}
function getMail() {
    return [];
}
function getUser() {
    return [
        {
            id: '5f8d0c9b-bf21-4f2c-8c8d-6c5d8e6dbe7b',
            email: 'mskcars@gmail.com',
            role: client_1.Role.ADMIN,
            password: {
                create: {
                    hashedPassword: '$10$pNlcRy4eTREv4urj3rN9Ceg4ziQUj3NxPQrLeYdyxgV0cP9Yhhq9G$2a$10$pNlcRy4eTREv4urj3rN9Ceg4ziQUj3NxPQrLeYdyxgV0cP9Yhhq9G',
                },
            },
        },
    ];
}
async function seed() {
    await db.carsExport.deleteMany();
    await db.carsDetailing.deleteMany();
    await db.mail.deleteMany();
    await db.user.deleteMany();
    await Promise.all(getCarsDetailing().map((carsDetailing) => {
        return db.carsDetailing.create({ data: carsDetailing });
    }));
    await Promise.all(getCarsExports().map((carsExport) => {
        return db.carsExport.create({ data: carsExport });
    }));
    await Promise.all(getMail().map((mail) => {
        return db.mail.create({ data: mail });
    }));
    await Promise.all(getUser().map((user) => {
        return db.user.create({ data: user });
    }));
}
seed();
//# sourceMappingURL=seed.js.map