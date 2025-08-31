import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(request, content){
    //console.log(`request data is: ${request} and content data is ${json(content)}`);
    console.log(`content is `, content.params.id);
    const requestId = content.params.id;
    const response = users.filter((user)=>user.id ==requestId );
    console.log(`response is:`, response);
    //return NextResponse.json(response, {status:200});
    return NextResponse.json(response, {status:200})
}