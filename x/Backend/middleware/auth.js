import jwt from "jsonwebtoken";

export default function auth(req,res,next){
    const token=req.headers.authorization;

    if(!token){
        res.status(401).json({message:"Token not provided"});
        return;
    }

    try{
        const decoded=jwt.verify(token,"secret123");
        req.user=decoded;
        next();
    }

    catch{
        res.status(401).json({message:"Invalid Token"});
    }
    
}