// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create Recent schema:
const RecentSchema = new Schema({
    userEmail: { type: String, require: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

// create Recent model:
const Recent = mongoose.model("Recent", RecentSchema);
export default Recent;
