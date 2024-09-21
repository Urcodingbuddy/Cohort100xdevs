import { Hono } from "hono";
import bcrypt from 'bcryptjs';
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from '@anshpethe/medium-common'
import { createPrismaClient } from './prisma';
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
}>();


// ------------------------Signup----------------------
    userRouter.post('/signup', async(c)=>{
      const prisma = createPrismaClient(c.env?.DATABASE_URL);
      try {
        const body = await c.req.json();
        const { success } = signupInput.safeParse(body);
        if(!success){
          c.status(411);
          return c.json({message: "Inputs not correct"})
        }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const user = await prisma.user.create({
      data:{
        email: body.email,
        password: hashedPassword,
        name: body.name || null,
      },
    })
    const jwt = await sign({id: user.id,email: user.email,},c.env.JWT_SECRET)
    return c.json({jwt, user:{name:user.name}})
    } catch (error) {
      console.error("Couldnt Signup, Try Again Leter",error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      return c.json({
        success:false,
        message: "Signup failed, please try again later.",
        error: errorMessage,
      },500)
    }  
  })
  
  
  // --------------------Signin---------------------
    userRouter.post('/signin',async(c)=>{
      const prisma = createPrismaClient(c.env?.DATABASE_URL);

    try {
      const body = await c.req.json();
      const { success } = signupInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({message: "Inputs not correct"})
      }
      const user = await prisma.user.findUnique({
          where:{email : body.email}
      });
      if(!user){
        c.status(403)
        return c.json({error:'User not found'})
      }
      const isPasswordValid = await bcrypt.compare(body.password, user.password)
      if(!isPasswordValid){
        c.status(403);
        return c.json({error:'Invalid Password'})
      }
      const jwt  = await sign({id:user.id,email: user.email}, c.env.JWT_SECRET);
      return c.json({jwt, user:{name:user.name}})
    } catch (error) {
      console.error("Couldnt Signin, Try Again Leter",error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      return c.json({
        success:false,
        message: "Signin failed, please try again later.",
        error: errorMessage,
      },500)
    }
  })
  // -----------------------------------------