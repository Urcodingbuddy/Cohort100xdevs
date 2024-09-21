import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createPrismaClient } from './prisma';
import {createPostInput, updatePostInput} from '@anshpethe/medium-common'

export const postRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string,
        JWT_SECRET:string
    }
    Variables:{
        userId: string
    }
}>();


postRouter.get('/bulk', async(c) => { 
    const prisma = createPrismaClient(c.env?.DATABASE_URL);
    try {
        const posts = await prisma.post.findMany({
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        return c.json({
            success: true,
            posts,
        })
    } catch (error) {
        console.error('Error fetching Posts',error)
        return c.json({
            success: false,
            message: "error fectching Posts",
            error: error instanceof Error ? error.message : "Unknown Error" 
        },500)
    }
})  

postRouter.get('/:id', async(c) => { 
    const prisma = createPrismaClient(c.env?.DATABASE_URL);
    const id = c.req.param('id');
   try {
   const post = await prisma.post.findFirst({
     where:{
         id: id
     },
     select:{
        id:true,
        title:true,
        content:true,
        author:{
            select:{
                name:true
            }
        }
    }
   })
   return c.json({
     post
   })
} catch (error) {
    console.error("Fetching Failed, Try Again Leter",error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    return c.json({
      success:false,
      message: "Update failed, please try again later.",
      error: errorMessage,
    },411)
}
})  


postRouter.use('/*', async(c, next)=>{
    const authHeader = c.req.header('authorization') || '';
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if(!user){
        return c.json({message: "Unauthorized Access, Please Login or Signup"})
    }
    c.set("userId", user.id as string);
    await next();
})
postRouter.post('/', async(c) => { 
    
    const prisma = createPrismaClient(c.env?.DATABASE_URL);
        const body = await c.req.json();
        const { success } = createPostInput.safeParse(body);
        if(!success){
            c.status(411);
            return c.json({message: "Inputs not correct"})
          }
        const authorId = c.get('userId');
          try {
          const post = await prisma.post.create({
                data:{
                    title: body.title,
                    content: body.content,
                    authorId: authorId
                }
          })
        return c.json({
            id:  post.id
        })
    } catch (error) {
        console.error("Upload Failed, Try to signin",error)
        
        return c.json({
          success:false,
          message: "Upload failed,You are not Logged in.",
        },411)
    }

})  


postRouter.put('/', async(c) => { 
    const prisma = createPrismaClient(c.env?.DATABASE_URL);
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({message: "Inputs not correct"})
      }
          try {
          const post = await prisma.post.update({
            where: {
                id: body.id
            },
            data:{
                title: body.title,
                content: body.content,
            }
          })
          return c.json({
            id: post.id
          })
    } catch (error) {
        console.error("Update Failed, Try Again Leter",error)
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
        return c.json({
          success:false,
          message: "Update failed, please try again later.",
          error: errorMessage,
        },411)
    }

})  



