
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log:['info', 'query', 'warn', 'error']})

async function main() {
  await prisma.post.create({
    data: {
     title: "ppGG",
     content:'https://i.postimg.cc/dtZ7yTwp/heart-2.png',
     published:true,
     author: {
        connect: {
            id: 5
        }
     },
    //  or  we can do 
    // authorId:5
    }
  })
}

main()
  // .then(async () => {
  //   console.log("done");
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // })