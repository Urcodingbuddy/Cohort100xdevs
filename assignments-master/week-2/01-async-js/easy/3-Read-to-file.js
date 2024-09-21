/*

## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output.

*/

const fs = require("fs");
function evens() {
    for (let i = 0; i < 10000000000; i++) {}
    setTimeout(ondone, 1000)
}
console.log("A")
function ondone() {
    fs.readFile("Example.txt", "utf8", (err, data) => {
        console.log(data);
        console.log("B")
    });
    console.log("C")
}
console.log("D")
evens();
console.log("E")

// Results are :-  A>D>E>C>B


