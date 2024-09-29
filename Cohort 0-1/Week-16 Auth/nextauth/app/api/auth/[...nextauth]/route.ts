import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth(NEXT_AUTH);
export const GET = handler;
export const POST = handler;








// import { NextRequest, NextResponse } from "next/server";

// export function GET(req:NextRequest, { params:{authRoutes}}:{
//     params:{
//         authRoutes:string[]
//     }
// }){
//     console.log(authRoutes)
//     return NextResponse.json({
//         massage:"You are on GET...auth"
//     })
// }


// export function POST(){
//     return NextResponse.json({
//         massage:"You are on POST...auth"
//     })
// }