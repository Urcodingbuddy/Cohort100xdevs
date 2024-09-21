/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/


const fs = require("fs");

function evens() {
    for (let i = 0; i < 10000000000; i++) {}
    setTimeout(ondone, 1000);
}

console.log("A");

function ondone() {
    fs.writeFile("Example.txt", "Hello, World001!", "utf8", (err) => {
        if (err) throw err;
        console.log("B");
    });
    console.log("C");
}

console.log("D");
evens();
console.log("E");

// Expected output: A > D > E > C > B
