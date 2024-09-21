const express = require("express")
const app = express()

function ticketChecker(req, res, next){
    const ticket = req.query.ticket;
    if(ticket === "free"){
        next();
}
else{
    res.status(403).send("Access denied. You need a valid ticket");
}
}