import { connectDB } from "@/lib/db";
import Product from "@/lib/model/product";
import { NextResponse } from "next/server";

// PUT - Update Product
export async function PUT(req, { params }) {
  try {
    await connectDB();

    const { id } = params;
    const body = await req.json();

    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true, // return updated document
      runValidators: true, // validate before update
    });

    if (!updatedProduct) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "✅ Product updated successfully", product: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ PUT Error:", error);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

// DELETE - Remove a product by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const { id } = params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return NextResponse.json(
        { error: "❌ Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "✅ Product deleted successfully", product: deletedProduct },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ DELETE Error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}