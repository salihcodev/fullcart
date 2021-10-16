// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create user schema:
const AuthSchema = new Schema({
    id: { type: String },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
        type: String,
        default: "REGULAR",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// create user model:
const User = mongoose.model("User", AuthSchema);
export default User;
