import express from 'express';
import {doctorList,doctorLogin,appointmentsDoctor,appointmentCompleted,appointmentCancel, doctorDashboard} from '../controllers/doctorControllers.js';
import authDoctor from '../middleware/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',doctorLogin)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor, doctorDashboard )
export default doctorRouter