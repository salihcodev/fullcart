// pkgs:
import mongoose from "mongoose";
import { populateAndSelectFields } from "./utils/pre";
const { Schema } = mongoose;

// create subcategory schema:
const SubCategorySchema = new Schema({
    name: String,
    mainCategory: { type: Schema.Types.ObjectId, ref: "Category" },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

populateAndSelectFields(SubCategorySchema, `mainCategory`, []);

// create subcategory model:
const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
export default SubCategory;
