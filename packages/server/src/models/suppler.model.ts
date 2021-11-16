// pkgs:
import mongoose from "mongoose";
const { Schema } = mongoose;

// create user schema:
const AuthSupplerSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    countryCode: String,
    region: String,
    country: String,
    images: [String],
    totalEmployees: Number,
    businessType: String,
    companyName: String,
    specialization: String,
    yearEstablished: Number,
    certifications: String,
    productCertifications: String,
    patents: String,
    trademarks: String,
    role: {
        type: String,
        default: "SUPPLER",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    id: { type: String },
});

// create user model:
const Suppler = mongoose.model("Suppler", AuthSupplerSchema);
export default Suppler;
