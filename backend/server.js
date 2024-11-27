import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';


//app configuration
const app = express();
const port = process.env.PORT || 4000


//middleware

app.use(express.json());
app.use(cors());
connectDB();


// api endpoint
app.get('/',(req,res)=>{
    res.send('Hello World from Express.js');
})

app.listen(port, ()=> console.log('listening on port',port));
