import mongoose from "mongoose";
const { Schema } = mongoose;

// utils:

export const CartItemSchema = new Schema({
    count: {
        type: Number,
        default: 1,
    },
    name: String,
    slug: String,
    priceInDollar: Number,
    cover: String,
    categoryName: String,
    subcategoryName: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
    signature: String,
    addedBy: { type: Schema.Types.ObjectId, ref: "Customer" },
});

const CartItem = mongoose.model("CartItem", CartItemSchema);
export default CartItem;
