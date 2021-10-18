import mongoose from "mongoose";
const { Schema } = mongoose;

// create FurnitureProduct schema:
// >>>> FurnitureProduct schema
const FurnitureSchema = new Schema({
    name: String,
    price: Number,
    cover: String,
    port: String,
    payment: String,
    afterSales: String,
    warranty: Number,
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
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: String,
});

// >>>> create furniture product model
const Furniture = mongoose.model("Furniture", FurnitureSchema);
export default Furniture;
