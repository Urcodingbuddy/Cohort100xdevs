/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/
let currenttime;
setInterval(function clock(){
    currenttime = new Date();
    let hrs = currenttime.getHours();
    let min = currenttime.getMinutes();
    let sec = currenttime.getSeconds();
    let ampm = hrs>= 12 ? 'PM' : 'AM';

    hrs = hrs > 12 ? hrs - 12 : hrs;
    hrs = hrs === 0 ? 12 : hrs;
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10? "0" + sec : sec;
   const time  = `${hrs}:${min}:${sec}:${ampm}`

   // For removig console.clear();
   process.stdout.write(`\r${time}`)

},1000)

