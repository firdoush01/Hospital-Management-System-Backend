import express from 'express'
import { postAppointment } from '../controllers/appointmentController.js'
import { isAdminAuthenticated, isPatientAuthenticated } from '../middlewares/auth.js'

const router = express.Router()

router.post("/post",isPatientAuthenticated,postAppointment)

export default router