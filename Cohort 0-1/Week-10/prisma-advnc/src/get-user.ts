import { PrismaClient } from "@prisma/client";
import { error } from "console";
const prisma = new PrismaClient()

async function getuser(email: string) {
    try {
        const res = await prisma.user.findUnique({
            where:{email},
            select:{
                id: true,
                email: true,
                firstName:true,
                lastName: true,
                phonenumber: true,
            }
        })
        return res;
    } catch (error) {
        console.error("Error while fetching user:", error);
        throw error;
    }
}

getuser("anshpethe@gmail.com")
    .then(result => {
        console.log("User found:", result);
    })
    .catch(error=> {
        console.error("Failed to fetch user:", error);
    });