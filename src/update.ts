import { PrismaClient  } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where :  {
            id: "a4e81833-c1d0-4f92-9334-1b8f9ca82b1e"
        },
        data: {
            duration:300,
            name: "Curso Guerra"
        }
    })

    console.log(result);
}

main();
// para rodar:
// yarn ts-node-dev src/update.ts
