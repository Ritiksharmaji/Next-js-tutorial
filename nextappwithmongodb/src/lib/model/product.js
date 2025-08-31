import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    comapny: {
      type: String,
      required: [true, "company name is required"],
      trim: true,
    },
    color: {
      type: String,
      required: [true, "color name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: ["electronics", "clothing", "books", "general"], // you can extend this
      default: "general",
    },
    image: {
      type: String, // store URL or file path
      default: "",
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // automatically adds createdAt and updatedAt
  }
);

// ✅ Prevent model overwrite when hot reloading in Next.js
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
