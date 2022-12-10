// pkgs:
import mongoose from "mongoose";
import { populateAndSelectFields, slugifyIt } from "./utils/pre";
const { Schema } = mongoose;

// create subcategory schema:
const SubCategorySchema = new Schema({
    name: String,
    slug: String,
    Category: String,
    mainCategory: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

slugifyIt(SubCategorySchema);

// create subcategory model:
const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
export default SubCategory;
