const z = require("zod");
function validateInput(obj){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
    const response = schema.safeParse(obj)
    console.log(response)

}

app.post("/login", function(req ,res){
    const response = validateInput(req.body)
    if(!response.success){
       res.json({
         msg: "Your input are invalid"
       })
       return;
    }
})