
const fs = require("fs");
// Filesystem module

fs.readFile("Example.txt","utf-8", function(err, data){
    console.log(err)
})

console.log("Maybe i'm won")