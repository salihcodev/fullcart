// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create category schema:
const CategorySchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

// create category model:
const Category = mongoose.model("Category", CategorySchema);
export default Category;
