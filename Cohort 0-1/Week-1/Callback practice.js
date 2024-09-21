function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}

function sumofAny(a ,b ,calc){
    console.log(calc)
    const val1 = calc(a)
    const val2 = calc(b)
    return val1+val2;
}

const ans = sumofAny(2, 2,square)
console.log(ans)


// Anonymous Functions
/* const ans = sumofAny(2, 2,square) instead of this we should use below one */

// This is a Anonymous Function of Square...
/*  
const ans = sumofAny(2, 2,functione(n){    
    return n*n
})
*/

// this can be --- ➕
/* 
const ans = sumofAny(2, 2,function square(n){    
    return n*n
})
*/

