import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must contain at least 3 Characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must contain at least 3 Characters"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isEmail(value),
            message: "Provide a valid email"
        }
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone should contain exactly 11 digits"],
        maxLength: [11, "Phone should contain exactly 11 digits"]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must contain at least 10 characters!"]
    }
});

export const Message = mongoose.model("Message", messageSchema);
