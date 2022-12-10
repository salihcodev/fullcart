// pkgs:
import mongoose from "mongoose";
import { slugifyIt } from "./utils/pre";
const { Schema } = mongoose;

// create category schema:
const CategorySchema = new Schema({
    name: String,
    slug: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

slugifyIt(CategorySchema);

// create category model:
const Category = mongoose.model("Category", CategorySchema);
export default Category;
