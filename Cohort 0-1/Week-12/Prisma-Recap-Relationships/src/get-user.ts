import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function getUser(userId:number) {
    try {
        const res = await prisma.user.findMany({
            where:{
                id: userId
            }
        })
        console.log('Todo: ',res)
        return res;
    } catch (e) {
        console.error('Error getting user: ',e)
    }finally{
        await prisma.$disconnect()
    }
}
getUser(1)