import jwt from 'jsonwebtoken';

//admin authentication middleware
const authUser = async (req, res, next) => {
    try {
        const token = req.headers.token || req.headers.authorization?.split(' ')[1]; // Support for different header formats

        if (!token) {
            return res.json({ success: false, message: 'No token, authorization denied bhaiya' });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = token_decode.id; // Attach userId directly to req
        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
export default authUser;