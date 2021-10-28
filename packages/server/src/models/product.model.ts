import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:
import { populatingFields, slugifyIt } from "./utils/pre";

export const ProductSchema = new Schema({
    name: String,
    model: String,
    slug: String,
    price: Number,
    cover: String,
    port: String,
    category: String,
    subCategory: String,
    payment: String,
    afterSales: String,
    warranty: Number,
    warrantyIn: String,
    style: String,
    type: String,
    features: [String],
    images: [String],
    productInfo: {
        modelNumber: String,
        availableColors: [String],
        priceIncludes: String,
        mainMaterial: String,
        surfaceFinishing: String,
        handlePosition: String,
        position: String,
        leadingTime: String,
        transportPackage: String,
        origin: String,
        hsCode: String,
    },
    suppler: { type: Schema.Types.ObjectId, ref: "User" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
});

populatingFields(`suppler`, [`__v`, `role`, `createdAt`, `password`]);
slugifyIt();

const Product = mongoose.model("Product", ProductSchema);
export default Product;
