import express from "express";
import { patientRegister } from "../controllers/userController.js";
import { login } from "../controllers/userController.js";


const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);


export default router;