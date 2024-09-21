const jwt = require("jsonwebtoken")

const value ={
    name:"Ansh",
    accountNum:123456
}

const token = jwt.sign(value, "secret")
console.log(token)

const decoded = jwt.verify(token, "secret")
console.log(decoded)