/*

// Ugly way 
const fs = require('fs'); // Paste the Example.txt or Create it in Parent Folder...;)
// own Asynchronous function
function AnshReadFile(cb) {
    fs.readFile('Example.txt', 'utf8', (err, data) => {
        cb(data);
    });
}
// CallBack function to call
function oneDone(data) {
    console.log(data);
}
AnshReadFile(oneDone);

*/

const fs = require('fs');
function AnshReadFile() {
    return new Promise(function (resolve) {
        fs.readFile('Example.txt', 'utf8', (err, data) => {
            resolve(data)
        })
    })
}

// Resolving function to Print
function onData(data){
    console.log(data);
}

// AnshReadFile().then(onData);
var a = AnshReadFile();
console.log(a)
a.then(onData); // This will print the data of Example.txt file