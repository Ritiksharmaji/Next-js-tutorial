import { NextResponse } from "next/server";

export async function GET(request) {
    //return new Response("Hello Ritik Users !!");
    return NextResponse.json({"name":"Ritik", "age": 24, "gnder": "male"});
    
}