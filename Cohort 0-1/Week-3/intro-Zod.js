const express = require("express");
const zod = require("zod");
const app = express();
const schema1 = zod.array(zod.number())
const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    age: zod.number(),
    country: zod.literal("IN").or(zod.literal("US"))

})
app.use(express.json())
app.post("/health-checkup", (req, res)=>{
    const kidneys = req.body.kidneys;
    const response = schema1.safeParse(kidneys)
    // const kidneyLength = kidneys.length;
    // res.send(`You have ${{response}} Kidneys`)
    if(!response.success){
        res.status(401).json({
            msg:"Invalid Credentials"
        })
    }else{
    res.send({
        response
    })
}
})
app.listen(3000, "0.0.0.0" ,()=>{
    console.log(`Server is runnig on Port:3000`)
} )