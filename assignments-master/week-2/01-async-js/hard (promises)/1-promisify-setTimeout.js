/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Resolved");
        },n*1000)
    });
}



module.exports = wait(2);
// console.log(wait(2))

// Call the wait function and use the then method to print the resolved value
wait(2).then((value) => {
    console.log(value);
});