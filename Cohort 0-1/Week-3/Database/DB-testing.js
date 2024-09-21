const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
mongoose.connect(
    "mongodb+srv://anshpethe110:%40mangoanshpethe159@cluster0.702twr0.mongodb.net/100xdevs-Practice?retryWrites=true&w=majority"
    // mongodb+srv://anshpethe110:<password>@cluster0.702twr0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    /*
     for more info -   Read txt file in Code learning Dir:)  
     */
);
const User = mongoose.model('user-01', {
    name: String,
    email: String,
    password: String,
    username: String
})
app.post("/signup",async function (req, res) {
   try{ 
    const username = req.body.username;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await User.findOne({
        username: username
    })
    if(existingUser){
        return res.status(400).send({
            message: "Username already exists"
        })
    }
    const user = new User({
        name: name,
        email: email,
        username: username,
        password: password,
    })
    user.save();
    res.send({
        message: "User registered successfully"
    })
    }catch{
        res.status(500).send({
            message: "Error registering user"
        })
    }
})
app.listen(3000, "0.0.0.0",()=>{
    console.log("Server running on port: 3000 :)")
})