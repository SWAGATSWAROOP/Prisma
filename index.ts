import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create User
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Swagat",
  //       email: "swagat@gmail.com",
  //     },
  //   });
  //   get all users
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //connecting to like foreign key

  const article = await prisma.article.create({
    data: {
      title: "my first artc",
      body: "this is my first",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect;
    process.exit(1);
  });
