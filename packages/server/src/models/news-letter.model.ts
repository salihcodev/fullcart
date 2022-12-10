// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create newsletter schema:
const NewsletterSchema = new Schema({
    userEmail: { type: String, require: true },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

// create newsletter model:
const Newsletter = mongoose.model("Newsletter", NewsletterSchema);
export default Newsletter;
