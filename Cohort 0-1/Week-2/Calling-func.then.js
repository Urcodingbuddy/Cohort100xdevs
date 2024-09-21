// Promisfy this Async Function
/*
function myownSettimeOut(callback, duration){
    setTimeout(function(){
        callback
    },duration);
}
myownSettimeOut(function(){},1000)
*/

function PromisfiedmyOwnSettimeOut(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration)
    });
    return p
}

const ans = PromisfiedmyOwnSettimeOut(1000)
console.log(ans)
ans.then(function(){
    console.log("timeout is done")
})



// myownSettimeOut(function(){
//     console.log("After SetTimeout")
// },1000)














// This is Nesting of Methods form Async func
/*

setTimeout(function(){
    console.log("Hello World!");
    setTimeout(function(){
        console.log("After 2 sec")
    },2000)
},1000)

*/
// Instead of we do This 👇
// Async - Await func
/*
waitFor(1000)
console.log("I am first")
waitFor(2000)
console.log("I am Second")
waitFor(3000)
console.log("I am third")
*/