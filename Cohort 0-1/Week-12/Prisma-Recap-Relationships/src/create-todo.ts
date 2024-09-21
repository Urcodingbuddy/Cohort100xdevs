import  { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
interface TodoSchema{
    title:string,
    description:string,
    userId:number
}
async function insertTodo(todo:TodoSchema) {
    try {
        const res = await prisma.todo.create({
            data:todo,
        })
        console.log('Todo Created: ',res)
        return res;
    } catch (e) {
        console.error('Error Creating todo: ',e)
    }finally{
        await prisma.$disconnect()
    }

}
const newTodo:TodoSchema ={
    title:'Go to Gym',
    description:`I can't go gym, need money`,
    userId:1
}
insertTodo(newTodo);