// => A promise can be [ pending, Resolved, Rejected ] 🛖🧿

/*.......................................................*/
// => Pending: Initial state, where the operation has not started yet.
// => Resolved: Successful operation, where the operation has completed successfully.
// => Rejected: Failed operation, where the operation has failed.       
//                                 Or🔍
// => Settled: Either resolved or rejected, where the operation has completed.
// => Fulfilled: Resolved, where the operation has completed successfully.
// => Unsettled: Pending, where the operation has not started yet.
/*.......................................................*/
var d = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hogya bhai");
    }, 2100)
})
function callback() {
    console.log(d)
}
console.log(d)
d.then(callback)

/*
let p = new Promise(function(resolve){
    resolve("Bhai i am done")
});

p.then(function(){
    console.log(p)
})
*/