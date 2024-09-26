"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getCarsExports() {
    return [
        {
            id: 'd9994b64-4222-48e5-973b-43a1564de4c8',
            img: 'hyundai3.jpg',
            carMark: 'Hyundai9',
            restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
            description: JSON.stringify(['przykład', '1', '2', '2', '4']),
        },
    ];
}
function getCarsDetailing() {
    return [
        {
            id: 'a1f11b1f-5e2c-43c4-9e16-ba67f8eb5717',
            img: 'hyundai1.jpg',
            carMark: 'Hyundai1',
            restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
            description: 'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
        },
    ].sort((a, b) => a.id.localeCompare(b.id));
}
function getMail() {
    return [
        {
            id: '5719cb57-05a8-4392-b1ec-5b64fa2316b8',
            name: 'John',
            surname: 'Doe',
            email: 'user1@example.com',
            phone: '123456789',
            title: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper velit. Duis vel nunc ac nunc tincidunt congue. Donec consectetur velit a justo semper, vitae congue erat molestie.',
        },
    ];
}
function getUser() {
    return [
        {
            id: '5f8d0c9b-bf21-4f2c-8c8d-6c5d8e6dbe7b',
            email: 'przykładowyemail@gmail.com',
            role: client_1.Role.ADMIN,
            password: {
                create: {
                    hashedPassword: 'hashed_password_here',
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
    await Promise.all(getCarsDetailing().map((carsExport) => {
        return db.carsExport.create({ data: carsExport });
    }));
    await Promise.all(getCarsDetailing().map((carsDetailing) => {
        return db.carsDetailing.create({ data: carsDetailing });
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