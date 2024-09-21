/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // Busy-wait
    }
    return Promise.resolve(); // Resolves immediately after the specified time
}

// Example usage:
sleep(5000) // Sleep for 2 seconds
    .then(() => {
        console.log("Thread slept for 5 seconds.");
    });


module.exports = sleep;


/*

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

*/