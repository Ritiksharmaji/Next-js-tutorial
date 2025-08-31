import { connectDB } from "@/lib/db";
import Product from "@/lib/model/product";
import { NextResponse } from "next/server";

export async function GET(){
    console.log(`get method called inside of product route`);
    await connectDB();
    const data = await Product.find();
    if(data){
        return NextResponse.json(data,{status:200})
    }else{
        return NextResponse("data not there!!!");
    }
   // return NextResponse.json({result:true});
}