import express from 'express';
const app = express();

app.get('/', (req, res)=>{
    res.json({
        massage:"Get req Working fine!   :)  "
    })
})

app.listen(3000,'0.0.0.0',()=>{
    console.log("live on Port: 3000")
})