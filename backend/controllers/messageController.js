import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res, next) => {
    const { firstName, lastName, email, phone, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            message: "Please fill up the full form",
        });
    }

    try {
        // Create a new message
        await Message.create({ firstName, lastName, email, phone, message });
        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        // Check if the error is a validation error
        if (error.name === "ValidationError") {
            // Extract and format error messages for each invalid field
            const errors = Object.values(error.errors).map((err) => ({
                field: err.path,
                message: err.message,
            }));
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors,
            });
        }

        // Handle any other errors
        res.status(500).json({
            success: false,
            message: "Failed to send message. Please try again later.",
            error: error.message,
        });
    }
};
