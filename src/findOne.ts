import { PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //select * from COURSES limit 1
    const courses = await prisma.courses.findFirst({
        take: -1 //Aqui ele funciona como ordenarção contraria
    })
    console.log(courses);
}

main();
// para rodar:
// yarn ts-node-dev src/findOne.ts