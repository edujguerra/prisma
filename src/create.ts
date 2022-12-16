import { PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso11111 de Node JS",
            description: "Cursos excelente de node1111."
        }
    })

    console.log(result);
}

main();
// para rodar:
// yarn ts-node-dev src/create.ts
