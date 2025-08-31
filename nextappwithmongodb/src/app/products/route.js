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

// POST - Create Product
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { name, comapny, color, description, price, category, image, stock } = body;

    if (!name || !comapny || !color || !description || !price || !category) {
      return NextResponse.json(
        { error: "Please fill all required fields" },
        { status: 400 }
      );
    }

    const newProduct = new Product({
      name,
      comapny,
      color,
      description,
      price,
      category,
      image,
      stock,
    });

    await newProduct.save();

    return NextResponse.json(
      { message: "✅ Product created successfully", product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ POST Error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
