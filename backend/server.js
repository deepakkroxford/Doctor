import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';


//app configuration
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

//middleware
app.use(express.json());
app.use(cors());

// api endpoint
app.use('/api/admin', adminRouter);
app.use('/api/doctor',doctorRouter)

app.get('/',(req,res)=>{
    res.send('Hello World from Express.js');
})
app.listen(port, ()=> console.log('listening on port',port));
