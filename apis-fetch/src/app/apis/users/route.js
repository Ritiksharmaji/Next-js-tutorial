import { users } from "@/utils/db";
import { NextResponse } from "next/server";

// export async function GET(request) {
//     //return new Response("Hello Ritik Users !!");
//     return NextResponse.json({"name":"Ritik", "age": 24, "gnder": "male"});
    
// }
export function GET(){
    const response = users;
    return NextResponse.json(response, {status:200});
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { id, name, role, email } = body;

    const data = {
      id,
      name,
      email,
      role,
    };

    users.push(data);

    return NextResponse.json(
      { message: "User added successfully", user: data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request", details: error.message },
      { status: 400 }
    );
  }
}