import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protect = async (req, res, next) => {
    let token;
    console.log(req.headers.authorization)
    if(req.authorization && req.headers.authorization.startWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password");
            // next is a function in express that passes control to the next middleware function
            next()
        } catch (error) {
            res.status(401).json({error: error})
        }
    } else{
        res.status(401).json({error: "No token, authorization denied"})
    }
}

export default protect;