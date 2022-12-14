import { PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de Node JS",
            description: "Cursos excelente de node."
        }
    })

    console.log(result);
}

main();
// para rodar:
// yarn ts-node-dev server.ts