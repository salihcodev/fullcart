// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create user schema:
const AuthSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
        type: String,
        default: "CUSTOMER",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

// create user model:
const User = mongoose.model("User", AuthSchema);
export default User;
