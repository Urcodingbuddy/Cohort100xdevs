import express from "express"
import { createClient } from "redis"

const app = express();
app.use(express.json()) 

const client = createClient();
client.connect();

app.post('/submit',(req, res)=>{
    const {problemId, userId, code, language} = req.body;
    client.lPush("Submission", JSON.stringify({problemId, userId, code, language}))
    res.json({
        message: "Submission recived!"
    })
})
app.listen(3000, "0.0.0.0", ()=>{
    console.log(`Live at http://localhost:3000`)
})