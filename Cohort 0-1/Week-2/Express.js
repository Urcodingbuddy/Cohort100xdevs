const express = require("express")

const app = express()


function sum(n){
    let ans = 0;
    for(let i =1;i<=n;i++){
        ans += i; // ans = ans + 1
    }
    return ans;
}

app.get("/",function(req,res){
    const n = parseInt(req.query.n,10);
    if (!isNaN(n) && n > 0) { // Ensure n is a valid positive number
        const ans = sum(n);
        res.send(`Hello, your answer is ${ans}`);
    } else {
        res.send("Please provide a valid positive number");
    }
})

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://localhost:3000');
  });
  