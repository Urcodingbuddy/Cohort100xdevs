function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}
function quad(n){
    return n*n*n*n
}
function sumofAny(a ,b ,calc){
    console.log(calc)
    const val1 = calc(a)
    const val2 = calc(b)
    return val1+val2;
}

const ans = sumofAny(2, 2,quad)
console.log(ans)