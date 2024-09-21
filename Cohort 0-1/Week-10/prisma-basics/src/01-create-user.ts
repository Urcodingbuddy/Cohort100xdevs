
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data:{
      email:"irvin2812@gmail.com",
      name:"irvin shri",
    }
  })
}

main()
// .then(async () =>{
//   await prisma.$disconnect()
// })
// .catch(async (e)=>{
//   console.error(e)
//   await prisma.$disconnect()
//   process.exit(1)
// })
