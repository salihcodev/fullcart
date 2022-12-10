import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:
import { populateAndSelectFields, slugifyIt } from "./utils/pre";

export const ProductSchema = new Schema({
    name: String,
    slug: String,
    priceInDollar: Number,
    cover: String,
    warranty: Number,
    warrantyIn: String,
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    subcategoryId: { type: Schema.Types.ObjectId, ref: "SubCategory" },
    categoryName: String,
    subcategoryName: String,
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
    prodBasicInfo: {
        style: String,
        kind: String,
        model: String,
        priceIncludes: String,
        mainMaterial: String,
        handlePosition: String,
        position: String,
        transportPackage: String,
        origin: String,
        port: String,
        hsCode: String,
    },
    deliveryPackage: {
        sellingUnits: String,
        singlePackageSize: String,
        singleGrossWeight: String,
        packageType: String,
    },
    suppler: { type: Schema.Types.ObjectId, ref: "Suppler" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
});

slugifyIt(ProductSchema);
populateAndSelectFields(ProductSchema, `suppler categoryId subcategoryId`, [
    `__v`,
    `role`,
    `createdAt`,
    `password`,
]);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
