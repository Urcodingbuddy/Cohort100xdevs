const express =  require("express")
const app = express();
let numOfRequests = 0;
let totaltime =  0;

function calculateTime(req, res, next){
    const start = process.hrtime()
    res.on('finish', ()=>{
        const diff = process.hrtime(start);
        const timeInMs = diff[0] * 1e3 + diff[1] * 1e-6 // Converts to miliSeconds
        totaltime+=timeInMs
        numOfRequests++;
        const avregeTime = totaltime/numOfRequests;
        console.log(`Request ${numOfRequests}: ${timeInMs.toFixed(3)} ms`);
        console.log(`Average time: ${avregeTime.toFixed(3)} ms`);
    })
    next();
}

function calculateRequest(req, res, next){
    numOfRequests++;
    console.log("Number of requests: " + numOfRequests);
    next();
}
app.use(calculateTime);
app.use(calculateRequest);
app.post("/health-checkup", (req, res)=>{
    console.log(req.body);
    req.headers
    req.query
    res.json({
        msg: "Hi there"
    })
})
app.get("/health-checkup2", (req, res)=>{
    res.json({
        msg: "Hi there again"
    })
})
app.listen(3000,"0.0.0.0",()=>{
    console.log("Server is running on port 3000")
})