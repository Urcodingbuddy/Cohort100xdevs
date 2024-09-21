const express = require("express");
const app = express();
app.use(express.json());
let kidneypostfix;
let kidneyLenght;
let errorCount = 0;
app.post("/", (req, res) => {
    res.status(404).send({
        msg: `Requested Page is Not available, instead You can try - "http://localhost:3000/health-checkup" Thank You:)`
    })
})
app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    let kidneyLenght = kidneys.length;
    let kidneypostfix;
    if (kidneyLenght === 1) {
        kidneypostfix = "kidney";
    } else if (kidneyLenght > 1) {
        kidneypostfix = "kidneys";
    }
    res.send(`Your kidney length is: ${kidneyLenght} ${kidneypostfix}`);
})
// global catches - Error handling
app.use(function (err, req, res, next) {
    errorCount++;
    res.json({
        msg: `Invalid kidneys length try keyword like  - {"kidneys":[1,2,3]} `
    })
    console.log(errorCount)
})
app.listen(3000, "0.0.0.0", () => {
    console.log("Server is running on port 3000");
})

