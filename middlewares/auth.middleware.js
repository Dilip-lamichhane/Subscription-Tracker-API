import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import { JWT_SECRET } from '../config/env.js'

const authorize = async (req, res, next) => {
  try {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    console.log("Token received:", token);

    if(!token) return res.status(401).json({
        message:'Unauthorized'
    })

    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded token:", decoded);

    const user = await User.findById(decoded.userId);
    console.log("User found:", user);

    if(!user) return res.status(401).json({
        message:'Unauthorized'
    })

    req.user = user;
    next();

 } catch(error){
    console.log("Auth error:", error.message);
    res.status(401).json({
        message:'Unauthorized',
        error:error.message,
    })
 }
}

export default authorize 