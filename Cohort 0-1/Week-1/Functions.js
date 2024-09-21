/*
function sum(num1, num2){
    let result = num1 + num2;
    displayResult(result)
    
}


function displayResult(data){
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data){
    console.log("Sum result is  : " + data);
}

*/

// You are only allowed to call one function after this 
// How will you displayResult of a sum




// Approch - 01 

// By calling Two Methods :(
// While - function sum is -
/*
    function sum(num1, num2){
    let result = num1 + num2;
    return result;
    
}
*/

// const ans = sum(1,2)
// displayResult(ans)


// Approch - 02
// Removing return from sum func and calling displayResult (see at the top:)

// const and = sum(1, 2)

function sum(num1, num2, fntocall) {
    let result = num1 + num2;
    fntocall(result)
}


function displayResult(data) {
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum result is  : " + data);
}

const ans = sum(1,2, displayResult) // Callback Fucntion