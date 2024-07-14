import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

/*  
function getCarsExports() {
    return [
        {

        },
    ]
} */
function getCarsDetailing() {
  return [
    {
      id: 'a1f11b1f-5e2c-43c4-9e16-ba67f8eb5717',
      img: 'hyundai1.jpg',
      carMark: 'Hyundai1',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '8e9c4e1f-ec4c-4b55-9a2b-7bca7724b034',
      img: 'hyundai2.jpg',
      carMark: 'Hyundai2',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: 'b2d08350-514f-4d47-8b20-202de2d8d1d7',
      img: 'hyundai3.jpg',
      carMark: 'Hyundai3',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '5719cb57-05a8-4392-b1ec-5b64fa2316b8',
      img: 'hyundai1.jpg',
      carMark: 'Hyundai4',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: 'c9d2f3c0-4a16-4024-ba9a-28a2de31667e',
      img: 'hyundai2.jpg',
      carMark: 'Hyundai5',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '7206b7c7-5864-48fe-9bf5-b1db0cb332f5',
      img: 'hyundai3.jpg',
      carMark: 'Hyundai6',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '89b2498b-32f8-4a22-9e5a-7b01b3720c7c',
      img: 'hyundai1.jpg',
      carMark: 'Hyundai7',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '9ec4f2e8-6d87-4f94-a8a1-8f57bcf0118a',
      img: 'hyundai2.jpg',
      carMark: 'Hyundai8',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: 'd9994b64-4222-48e5-973b-43a1564de4c8',
      img: 'hyundai3.jpg',
      carMark: 'Hyundai9',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '0e2f49e2-7356-4f3f-8f1b-036f0b6842a5',
      img: 'hyundai1.jpg',
      carMark: 'Hyundai10',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '6e2999a7-5bfe-4f35-82c6-0b3c37be7b52',
      img: 'hyundai2.jpg',
      carMark: 'Hyundai11',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: 'b4ea2200-c6a2-44d1-ba1f-1f218e42c8d4',
      img: 'hyundai3.jpg',
      carMark: 'Hyundai12',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '00a6b9a5-1f4b-46e2-9b63-0e5c2c8df52e',
      img: 'hyundai1.jpg',
      carMark: 'Hyundai13',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
    },
    {
      id: '4d7d722e-47c6-4d5b-9402-39f1a98e3c3b',
      img: 'hyundai2.jpg',
      carMark: 'Hyundai14',
      restImg: JSON.stringify(['hyundai1.jpg', 'hyundai2.jpg', 'hyundai3.jpg']),
      description:
        'Lorem Ipsum is Lorem Ipsum but it is Lorem Ipsum and is therefore not Lorem Ipsum',
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
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel semper velit. Duis vel nunc ac nunc tincidunt congue. Donec consectetur velit a justo semper, vitae congue erat molestie.',
    },
  ];
}
async function seed() {
  await db.carsDetailing.deleteMany();
  await db.mail.deleteMany();

  await Promise.all(
    getCarsDetailing().map((carsDetailing) => {
      return db.carsDetailing.create({ data: carsDetailing });
    }),
  );
  await Promise.all(
    getMail().map((mail) => {
      return db.mail.create({ data: mail });
    }),
  );
}

seed();
