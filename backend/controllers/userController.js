import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
//api to  register user

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({success:false, message: 'All fields are required' });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'please enter a valid emial' });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Please enter valid password' });
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}


// Api for user login

const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })

        }
        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

//Api to get user profile data 
const getProfile = async (req, res) => {
    try {
        const {userId} = req.body; // Use userId from middleware
        console.log("Received userId:", userId);

        const userData = await userModel.findById(userId).select('-password');
        console.log(userData);
        res.json({ success: true, userData });

        // if (!userData) {
        //     return res.json({ success: false, message: "User not found" });
        // }
       
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, dob, gender } = req.body
        const imageFile = req.file

        if (!name || !phone || !dob || !gender) {
            return response.json({ success: false, message: 'data is missing' })
        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender })

        if (imageFile) {
            //upload image to cloudnairy
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
            const imageURL = imageUpload.secure_url
            await userModel.findByIdAndUpdate(userId, { image: imageURL })
        }
        res.json({ success: true, message: 'profile updated' })

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message:error.message })
    }
}

export { registerUser, loginUser, getProfile, updateProfile }