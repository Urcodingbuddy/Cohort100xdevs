'use server'
// const client = new PrismaClient();
// instead of this we do 
import client from "@/db"

export  async function signup(name:string,email:string,password:string){
    try {
        await client.user.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        });
        return true;
    } catch (error) {
        return false
    }
}




















/*import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function GET(req:NextRequest){
    const user = await client.user.findFirst();
    return NextResponse.json({
        email: user?.email,
        name:user?.name
    })
}

export async function POST(req:NextRequest){
    const body = await req.json();
    try {
        await client.user.create({
            data:{
                name: body.name,
                email: body.email,
                password: body.password
            }
        });
    } catch (error) {
        return NextResponse.json({
            massage:"An Error has Occured while Signup",error
        },{
            status:411
        })
    }
    return NextResponse.json({
        body,
        massage:"you are Logged in"
    });
}
*/

    // header
    // console.log("hy"+req.headers.get('authorization'))
    // query parameters
    // console.log("hy"+req.nextUrl.searchParams.get('name'))
    // hit the database wt=ith username, password