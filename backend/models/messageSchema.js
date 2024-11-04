import mongoose from "mongoose";
import validator from "validator";

const messageSchema =  new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain atleast 3 Characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: ["Last Name must contain atleast 3 Characters"]
    },
    email: {
        type: String,
        required: true,
        minLength: ["Provide a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: ["phone should contain ecxact 11 digits"],
        maxLength: ["phone should contain ecxact 11 digits"]
    },
    message: {
        type: String,
        required: true,
        minLength: ["Message must contain at lesat 10 characters!"]
    }
})

export const Message = mongoose.model("Message",messageSchema)