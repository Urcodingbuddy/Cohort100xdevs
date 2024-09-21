import  { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; // Import bcrypt
const prisma = new PrismaClient();
interface UserSchema{
    username:string,
    email:string,
    password:string
}
async function insertUser(user:UserSchema) {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        const newUser = await prisma.user.create({
            data:{
                ...user,
                password:hashedPassword,
            },
        });
        console.log('User inserTed: ',newUser)
    } catch (e) {
        console.error('Error inserting user: ',e)
    }finally{
        await prisma.$disconnect()
    }   
}
const userData:UserSchema = {
    username: 'Ansh',
    email:'ansh@gmail.com',
    password:'ansdnqwd'
}
insertUser(userData)