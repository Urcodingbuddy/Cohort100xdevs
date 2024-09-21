/*
## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

let timer = 30;
function countdown(){
    if(timer>0){
        console.log(timer);
        timer--;
        setTimeout(countdown, 1000)
    }else{
        console.log(`countdown Completed!`);
    }
}

countdown();






































































// (Hint: setTimeout)