import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export function GET(){
    return Response.json({
        name: "",
        email:""
    })
}


export async function POST(req: NextRequest){
    try{

        const body = await req.json();
        const user = client.user.create({
            data:{
                username: body.username,
                password: body.password
            }
        })
        console.log(body)
        return NextResponse.json({
          message: "You are logged in",
          userId: (await user).id
        })

    }catch(error){
        console.error("Error creating user:", error);
        return NextResponse.json({
          message: "Error signing up user",
        }, { status: 500 });
    }
   
}