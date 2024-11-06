import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";

// Middleware to authenticate dashboard users
export const isAdminAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.adminToken;
    if (!token) {
      return next(
        new ErrorHandler("Dashboard User is not authenticated!", 400)
      );
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Admin") {
      return next(
        new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
      );
    }
    next();
  }
);

// Middleware to authenticate frontend users
export const isPatientAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.patientToken;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    if (req.user.role !== "Patient") {
      return next(
        new ErrorHandler(`${req.user.role} not authorized for this resource!`, 403)
      );
    }
    next();
  }
);

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `${req.user.role} not allowed to access this resource!`
        )
      );
    }
    next();
  };
};

// Logout function for dashboard admin
export const logoutAdmin = catchAsyncErrors(async (req, res, next) => {
    res
      .status(201)
      .cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Admin Logged Out Successfully.",
      });
  });
  
  // Logout function for frontend patient
  export const logoutPatient = catchAsyncErrors(async (req, res, next) => {
    res
      .status(201)
      .cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Patient Logged Out Successfully.",
      });
  });