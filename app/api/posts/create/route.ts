import { PrismaClient } from "@prisma/client";

export const POST = async (req: any, res: any) => {
    // getting the data in this object. The data is the one we submitted on the form.
    const receivedFromBody = await req.json();
    console.log(receivedFromBody);

    const prisma = new PrismaClient();

    try {

        const result = await prisma.post.create({
            data: {
                name: receivedFromBody.name,
                address: receivedFromBody.address,
                currentGrade: receivedFromBody.currentGrade,
                fieldOfStudy: receivedFromBody.fieldOfStudy,
                academicAchievements: receivedFromBody.academicAchievements,
                householdIncome: receivedFromBody.householdIncome,
                needFinancialAid: receivedFromBody.needFinancialAid,
                additionalInfo: receivedFromBody.additionalInfo,
                profilePicture: receivedFromBody.profilePicture,
                transcripts: receivedFromBody.transcripts,
            }
        });

        return new Response(JSON.stringify("StudentDataCreated."), { status: 201 });

    } catch (error) {
        console.log("Not able to create a student post.");
        console.log(error);
        return new Response("Failed to store student info.", { status: 500 });
    }
}