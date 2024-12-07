import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    category: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  });

const Product = mongoose.model("Product", ProductSchema);
export default Product;