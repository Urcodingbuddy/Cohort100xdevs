const express = require("express")
const app = express();
app.use(express.json());
let messages = [];
function userAuthMiddle(req, res, next) {
    const username = req.query.username;
    if (username != "Ansh" && password != "pass") {
        res.status(403).json({
            msg: "Invalid credentials"
        })
    }
    else {
        next();
    }
}
function kidneyAuthMiddle(req, res, next) {
    const kidneyId = req.query.kidneyId;
    if (kidneyId != 1 || kidneyId != 2) {
        res.status(403).json({
            msg: "Invalid Kidney-ID"
        })
    }
    else{
        next();
    }
};
app.get("/health-checkup", userAuthMiddle, kidneyAuthMiddle, (req, res) => {
    res.send("Your heart is healthy");
  });
  
  app.get("/kidney-check", userAuthMiddle, kidneyAuthMiddle, (req, res) => {
    res.send("Kidney is healthy");
  });
  
  app.get("/heart-check", userAuthMiddle, (req, res) => {
    res.send("Your heart is healthy");
  });
  
  app.post("/", (req, res) => {
    let message;
    if (req.body && req.body.message) {
      message = req.body.message;
    } else if (req.query && req.query.msg) {
      message = req.query.msg;
    }
    if (message) {
      messages.push(message); // add message to the array
      res.json({ msg: "Message saved!" });
    } else {
      res.status(400).json({ msg: "No message provided" });
    }
  });

  app.delete('/msgs', (req, res) => {
    messages = []; // reset the messages array
    res.json({ msg: 'All messages deleted!' });
  });
  
  app.get("/", (req, res) => {
    res.json({ messages: messages }); // return all messages
  });
  
  app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on http://localhost:3000");
  });


// Ugly Code 

/*
app.get("/health-checkup",function(req, res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;


    if(username != "ansh" && password != "pass"){
        res.status(400).json({
            msg: "Invalid credentials"
        })
        return
    }
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "Invalid credentials"
        })
        return
    }

    res.json({
        msg: "Health checkup successful, Kidney is totaly Fine :) "
    })
})
*/