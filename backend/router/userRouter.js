import express from "express";
import { addNewAdmin, patientRegister } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);


export default router;