const express = require("express");
const app = express();

function isOldEnoughMid(req, res, next) {
    if (req.query.age >= 14){
       next();
    }
    else {
       res.status(411).json({
        error: "You must be 14 years or older to ride the roller coaster"
       })
    }
}
app.use(express.static('public'));
app.use(isOldEnoughMid)

app.get("/ride1", (req, res, next) => {
    res.json({
        msg: "You have safly ridden the ride 1"
    })
})
app.get("/ride2", (req, res, next) => {
    res.json({
        msg: "You have safly ridden the ride 2"
    })
})
app.listen(3000, "0.0.0.0", ()=>{
    console.log("Server is Running on Port : 3000  --- :)")
});