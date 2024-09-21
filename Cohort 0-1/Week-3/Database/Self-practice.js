const express  = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const jwtPassword = "0101";
mongoose.connect("mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/100xdevs-Practice?retryWrites=true&w=majority");
let useridnum = 0;
const User = mongoose.model(`user-${useridnum}`,{
    name: String,
    email: String,
    password: String,
    username: String
})
app.post("/signup", async (req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const email = req.body.email;
        const existingUser = await User.findOne({username});
        if(existingUser) return res.status(409).json(
            {msg: "User already exists"}
        );
        const newUser = new User({
            name: name,
            email: email,
            password: password,
            username: username
        })
        await newUser.save();
        useridnum++;
        res.status(200).send({msg: "User registered successfully"});
    }catch{
        res.status(500).send({msg: "Something unexpected has occured"});
    } 
})
async function existingUser(username, password){      
   try{
        const user = await User.findOne({username,password})
        return !!user; // return true if exist , false otherwise
   }catch(err){
    console.log(err);
    return false;
   }
}
app.post("/signin",async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(!(await existingUser(username, password))){
        return res.status(401).json({msg: "Invalid username or password"});
    }
    // const user = await User.findOne({username})
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    })
})

app.listen(3000, "0.0.0.0", ()=>[
    console.log("Server is running on port 3000"),
    console.log("Press Ctrl+C to stop server")
])
