import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:
import { populateAndSelectFields, slugifyIt } from "./utils/pre";

export const OrderSchema = new Schema({
    name: String,
    slug: String,
    priceInDollar: Number,
    cover: String,
    warranty: Number,
    count: {
        type: Number,
        default: 1,
    },
    warrantyIn: String,
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
    status: { type: String, default: "processed" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
    orderedBy: { type: Schema.Types.ObjectId, ref: "Customer" },
    suppler: String,
});

populateAndSelectFields(OrderSchema, `orderedBy`, [
    `__v`,
    `createdAt`,
    `password`,
]);
slugifyIt(OrderSchema);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
