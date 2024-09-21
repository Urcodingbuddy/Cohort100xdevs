
//                                                      Authentication
//                                    Lets start by creating our assignment for today
//                                           A website which has 2 endpoints - 

/* 
                    POST /signin                                        GET /users
                    Body - {                                            Headers -
                    username: string                                    Authorization header
                    password: string                                    Returns an array of all users if user
                    }                                                   is signed in (token is correct)
                    Returns a json web token                            Returns 403 status code if not
                    with username encrypted                                                                
*/


const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    return ALL_USERS.some(user => user.username === username && user.password === password)    
    // or we can write in using for loop 
    // for (let i = 0; i < ALL_USERS.length; i++) {
    //     const user = ALL_USERS[i];
    //     if (user.username === username && user.password === password) {
    //         return true;
    //     }
    // }
    // return false;
    }

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
        token,
    });
});

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on port 3000")
})
