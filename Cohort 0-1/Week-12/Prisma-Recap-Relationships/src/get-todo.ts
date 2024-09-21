import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function getTodo(userId:number) {
    try {
        const res = await prisma.todo.findMany({
            where:{
                userId: userId
            },
            select:{
                id: true,
                title:true,
                description:true,
                user: true
            }
        })
        console.log('Todo: ',res)
        return res;
    } catch (e) {
        console.error('Error getting Todos: ',e)
    }finally{
        await prisma.$disconnect()
    }
}
getTodo(1)