// map filter and arrow 


// function sum(a, b){
//     return a + b;
// }

// const  a  = sum(5, 9)
// console.log(a)

// // 1. Arrow  functions 

// const dum =(c , d) =>{
//     return c + d;
// }

// const s = [1, 2, 3, 4, 5]
// const n = [ ]
// for(let i = 0;i < s.length; i++){
//     n.push(s[i]*2)
// }
// console.log(n)


// Same Using Map function
// const arr = [1,2,3,4,5,6]
// const ans = arr.map(function mul(i){
//     return i*2
// });
// console.log(ans)

/*

let a = [1, 2, 3, 4, 5, 6,56,45,34,34,34,34,45,67,45,,24,57,34,456,44556,45,57,57,34567,467,346,4678]
let d = []
for(let i = 0; i<a.length;i++){
    if(a[i]%2 == 0){
        d.push(a[i])
    }
}
console.log(d)
*/

// Now create this using Filter 
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const ans = arr.filter(function(n){
    if(n%2 == 0){
        return true
    }
    else{
        return false;
    }
})
console.log(ans)


let c = arr.join("-")
console.log(c)