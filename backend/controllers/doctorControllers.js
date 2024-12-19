import doctorModel from '../models/doctorModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from '../models/appointmentsModel.js'
//api to changethe availability of the doctor
const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: `Doctor's availability changed successfully to ${!docData.available}` })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//Api to get the list of doctors
const doctorList = async (req, res) => {
    try {
        const doctor = await doctorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, doctor })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


//Api to login the doctor 
const doctorLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const doctor = await doctorModel.findOne({ email })

        if (!doctor) return res.json({ success: false, message: 'Invalid credential' })

        const isMatch = await bcrypt.compare(password, doctor.password)

        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        }
        else {
            (!isMatch)
            return res.json({ success: false, message: 'Invalid credentials' })
        }
       

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to get doctor appooint for the specific doctor

const appointmentsDoctor = async (req, res) => {
    try {
        const { docId } = req.body
        const appointments = await appointmentModel.find({ docId })
        res.json({ success: true, appointments })
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//api to mark appointment completed

const appointmentCompleted = async (req, res) => {
    try{
        const {docId,appointmentId}  = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if(appointmentData && appointmentData.docId ===docId)
        {
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted: true });
            res.json({ success: true, message: 'Appointment marked as completed successfully' });
        }else{
            res.json({ success: false, message: 'Marked failed' });
        }
    }catch(error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}


const appointmentCancel = async (req, res) => {
    try{
        const {docId,appointmentId}  = req.body;
        const appointmentData = await appointmentModel.findById(appointmentId);

        if(appointmentData && appointmentData.docId ===docId)
        {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true });
            res.json({ success: true, message: 'Appointment marked as cancelled successfully' });
        }else{
            res.json({ success: false, message: 'Cancelled  failed' });
        }
    }catch(error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
export { changeAvailablity, doctorList, doctorLogin,appointmentsDoctor,appointmentCompleted,appointmentCancel}