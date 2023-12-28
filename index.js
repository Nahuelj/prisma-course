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
  // BUSCAR DATO
  //   const userFound = await prisma.user.findFirst({
  //     where: {
  //       name: "Agustin",
  //     },
  //   });
  //   console.log(userFound);
  // ELIMINAR DATO (si no existe lanza error asi que recordar manejar con trycatch)
  //   const userDeleted = await prisma.user.delete({
  //     where: {
  //       id: 3,
  //     },
  //   });
  //   console.log(userDeleted);
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //   ACTUALIZAR DATOS (con upsert se actualiza si existe sino se crea)
  //   const userUpdated = await prisma.user.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       email: "nahuel@gmail.com",
  //       name: "Nahuel",
  //       lastname: "José",
  //     },
  //   });
  //   console.log(userUpdated);
}

main();
