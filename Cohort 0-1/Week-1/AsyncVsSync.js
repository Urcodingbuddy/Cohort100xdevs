function findSum(n){
    let ans = 0;
    for(let i =0; i<n; i++){
        ans += i; 
    }
    return ans;
}
function findSumTill100(z){
    console.log(findSum(z));
}

// Busy Waiting
function syncBusy(){
    let a = 1;
    for(let i = 0; i<1000000000; i++){
        a++
    }
}
syncBusy();
// findSumTill100(100)
setTimeout(findSumTill100,1000,100)  // 1000 is 1 sec & 100 will be the argument passed to the function 
console.log("Hello World!")