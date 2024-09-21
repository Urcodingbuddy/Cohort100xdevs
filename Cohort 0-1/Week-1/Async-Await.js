/*


function kiratsAsyncFunction() {
    let p = new Promise(function(resolve) {
      // do some async logic here
      resolve("hi there!")
    });
    return p;
  }
  
  function main() {
    kiratsAsyncFunction().then(function(value) {
        console.log(value);
    });
  }
  
  main();

  */  //Without async

 // With Async  
function kiratsAsyncFunction() {
    let p = new Promise(function (resolve) {
        // do some async logic here
        resolve("hi there!")
    });
    return p;
}

async function main() {
    const value = await kiratsAsyncFunction();
    console.log(value);
}

main();