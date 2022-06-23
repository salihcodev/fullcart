import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:
import { slugifyIt } from "./utils/pre";

export const OrderSchema = new Schema({
    name: String,
    slug: String,
    priceInDollar: Number,
    cover: String,
    category: String,
    subCategory: String,
    payment: String,
    isReadyToShip: Boolean,
    isFastToDispatch: Boolean,
    stock: Number,
    basicLeadingTime: String,
    leadingTime: [{ dozensAmount: String, estimationTime: String }],
    deliveryPackage: {
        sellingUnits: String,
        singlePackageSize: String,
        singleGrossWeight: String,
        packageType: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
    orderedBy: { type: Schema.Types.ObjectId, ref: "Customer" },
    suppler: String,
});

slugifyIt(OrderSchema);

const Order = mongoose.model("Order", OrderSchema);
export default Order;
