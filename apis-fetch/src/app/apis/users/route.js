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

// PUT - Update User
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, role, email } = body;

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    users[userIndex] = { id, name, email, role };

    return NextResponse.json(
      { message: "User updated successfully", user: users[userIndex] },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request", details: error.message },
      { status: 400 }
    );
  }
}

// DELETE - Remove User
export async function DELETE(request, { params }) {
  const { id } = params;
  const index = users.findIndex((u) => u.id.toString() === id);

  if (index === -1) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const deletedUser = users.splice(index, 1);

  return NextResponse.json(
    { message: "User deleted successfully", user: deletedUser[0] },
    { status: 200 }
  );
}