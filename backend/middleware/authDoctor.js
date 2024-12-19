import jwt from 'jsonwebtoken';

//admin authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        const {dtoken}=req.headers
         // Support for different header formats

        if (!dtoken) {
            return res.json({ success: false, message: 'No token, authorization denied bhaiya' });
        }

        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET);
        req.body.docId = token_decode.id; // Attach userId directly to req
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
export default authDoctor;