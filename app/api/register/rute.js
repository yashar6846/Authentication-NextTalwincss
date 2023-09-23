import { NextResponse } from "next/server";

export async function POST(req, res, next) {
    try{
        const {name , email, password} = await req.json()

       console.log('name' , name);
       console.log('email' , email);
       console.log('password' , password);

       return NextResponse.json({message: "user registerd"}, {status: 201})
    } catch(error){
     return NextResponse.json({message: "An error occurred while registering the user"},{status: 500})
    }
}