import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:
import { populatingFields, slugifyIt } from "./utils/pre";

export const ProductSchema = new Schema({
    name: String,
    slug: String,
    priceInDollar: Number,
    cover: String,
    warrantyIn: String,
    port: String,
    category: String,
    subCategory: String,
    payment: String,
    isReadyToShip: Boolean,
    isFastToDispatch: Boolean,
    stock: Number,
    leadingTime: [{ dozensAmount: String, estimationTime: String }],
    basicLeadingTime: String,
    minimumOrder: Number,
    availableColors: [String],
    dozensOffers: [{ dozensAmount: String, dozenPrice: Number }],
    features: [String],
    images: [String],
    productInfo: {
        warranty: Number,
        style: String,
        kind: String,
        model: String,
        priceIncludes: String,
        mainMaterial: String,
        handlePosition: String,
        position: String,
        transportPackage: String,
        origin: String,
        hsCode: String,
    },
    deliveryPackage: {
        sellingUnits: String,
        singlePackageSize: String,
        singleGrossWeight: String,
        packageType: String,
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
