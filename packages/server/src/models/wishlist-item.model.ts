import mongoose from "mongoose";
import { populateAndSelectFields } from "./utils/pre";
const { Schema } = mongoose;

// utils:

export const WishlistItemSchema = new Schema({
    name: String,
    slug: String,
    priceInDollar: Number,
    categoryName: String,
    subcategoryName: String,
    cover: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
    addedBy: { type: Schema.Types.ObjectId, ref: "Customer" },
});

const WishlistItem = mongoose.model("WishlistItem", WishlistItemSchema);
export default WishlistItem;
