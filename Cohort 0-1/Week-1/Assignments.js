// Q.1 
/*Create a Counter in javascript (count down from 30 - 0)*/

let timer = 30;
function countdown() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            console.log(timer)
        }
    }, 1000)
}
let c = countdown()


// Q.2  
/*Calcule the time it takes between a 
SetTimeout call and inner function actually running*/


// Step 1: Record the start time
let startTime = Date.now();

// Step 2: Set the timeout
setTimeout(() => {
    // Step 3: Record the end time inside the callback function
    let endTime = Date.now();
    
    // Step 4: Calculate the elapsed time
    let elapsedTime = endTime - startTime;
    
    console.log(`Elapsed time: ${elapsedTime}ms`);
}, 1000);  // The delay is set to 1000ms (1 second)



// Q.3
/*  Create a terminal clock(HH:MM:SS)
*/

function formateTime(Number){
    return Number < 10 ? '0' + Number : Number;
}

function displaytime(){
    const now  = new Date();
    const hours = formateTime(now.getHours());
    const minutes = formateTime(now.getMinutes());
    const second = formateTime(now.getSeconds());
    const currentTime = `${hours}:${minutes}:${second}`
    console.clear()
    console.log(currentTime)
}

// Clear Console

setInterval(displaytime, 1000);

displaytime();
