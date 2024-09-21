// Middleware for handling auth
const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;
const jwt = require("jsonwebtoken")
// const {JWT_SECRET} = require("../index");
const { search } = require("../routes/admin");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
   try{
    const decoded =  jwt.verify(jwtToken, JWT_SECRET)
   if(decoded.username){
    next();
   }
   else{
    res.status(401).json({message: "You are fraud :)-F-:("})
   }

   }catch(e){
        res.json({
            msg:"invalid Token"
        })
   }
}

module.exports = adminMiddleware;