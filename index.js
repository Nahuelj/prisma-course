import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // CREAR DATO
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: "Jorge",
  //       email: "jorge@gmail.com",
  //     },
  //   });
  //   console.log(newUser);
  // VER TODOS LOS DATOS
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //   users.map((user) => {
  //     console.log(`${user.id}-${user.name}`);
  //   });

  const userFound = await prisma.user.findFirst({
    where: {
      name: "Agustin",
    },
  });

  console.log(userFound);
}

main();
