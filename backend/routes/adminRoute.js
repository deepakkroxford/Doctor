import express from 'express';
import { addDoctor, loginAdmin,getAllDoctors } from '../controllers/adminController.js';
import upload from '../middleware/multer.js';
import authAdmin from '../middleware/authAdmin.js'
import { changeAvailablity} from '../controllers/doctorControllers.js';

const adminRoute = express.Router();
adminRoute.post('/add-doctor',upload.single('image'), addDoctor);
adminRoute.post('/login', loginAdmin);
adminRoute.post('/all-doctors',authAdmin,getAllDoctors);
adminRoute.post('/change-availability',authAdmin,changeAvailablity);

export default adminRoute;
