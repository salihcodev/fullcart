// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create user schema:
const AuthCustomerSchema = new Schema({
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

// create customer model:
const Customer = mongoose.model("Customer", AuthCustomerSchema);
export default Customer;
