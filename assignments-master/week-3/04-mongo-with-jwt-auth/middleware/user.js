const config = require("../config");
const JWT_SECRET = config.JWT_SECRET;
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const word = token.split(" ");
    const jwtToken = word[1];
    const decoded =  jwt.verify(jwtToken, JWT_SECRET)
    try{
        console.log("user mid")
       if(decoded.username){
        req.username = decoded.username
        console.log(`Authenticated user: ${decoded.username}`);

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

module.exports = userMiddleware;