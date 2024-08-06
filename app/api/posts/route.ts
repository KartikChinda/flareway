import { PrismaClient } from "@prisma/client";

export const GET = async (req: any, res: any) => {
    const prisma = new PrismaClient();

    try {

        const students = await prisma.post.findMany();
        return new Response(JSON.stringify(students), { status: 201 });

    } catch (error) {
        console.log("We had some error fetching posts.");
        return new Response("Error fetching students", { status: 500 });
    }
}