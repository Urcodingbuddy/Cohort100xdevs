// Q.1

let Mfirstname = "Monish"

let Mlastname = "Roy"

let Ffirstname = "Moni"

let Flastname = "Roy"


console.log("Good afternoon : ", Mfirstname, Mlastname)
console.log("Good afternoon : ", Ffirstname, Flastname)


// Q.2

let Mfullname = (Mfirstname + Mlastname)
let Ffullname = (Ffirstname + Flastname)
let Gender = "F"
Gender.toUpperCase

if (Gender === "M") {
    console.log("Hello : Mr.", Mfullname)
    return
}
else if (Gender === "F") {
    console.log("Hello : Mrs.", Ffullname)
}

//Q.3

for (i = 1; i <= 100; i++) {
    console.log(i)
}

/////////////////////////////////////////////////////////////


const personarray = ["Anha", "denver", "julie", "mark"]

console.log(personarray[0])
console.log(personarray[1])
console.log(personarray[2])
console.log(personarray[3])





// Q.1 Print only Even numbers form 1 - 100
const numbers = Array.from({ length: 100 }, (_, index) => index + 1)

const nums = numbers.length;
const evenNumbers = [];

for (let i = 0; i < nums; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log(evenNumbers);


// Q.2 Print the biggest number of an array.

// Method - 01


let arr = Array.from({ length: 20 }, (_, index) => (index + 1))
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log(largest);



// Method - 02


// const numbers = Array.from({length:100}, (_, index) => index+1) /*Used in upper line*/

function findBigNum(arr) {
    console.log(`The largest num is ${Math.max(...arr)}`)
}

findBigNum(numbers)


// Q.3 Write a program that prints all the male Peoples first name given a complex object

//Method - 01
const personarr = ["Harkirat", "raman", "priya"]
const genderarr = ["male", "male", 'female']
const users = personarr.length

for (let i = 0; i < users; i++) {
    if (genderarr[i] == "male") {
        console.log(personarr[i])
    }

}


// Method - 02
const users1 = {
    name: "Ansh",
    gender: "male",
    age: 20
}

console.log(users1["name"])

// New type of Arrays (array of multiple  objects like {user1})

const alluser = [
    {
    name: "Anshu",
    genders: "male",
    age: 19
    },{
        name: "Anish",
        genders: "male",
        age: 21
    },{
        name: "Anjali",
        genders: "female",
        age: 20
    }

]


for(let i = 0; i<alluser.length;i++){
    if(alluser[i]["genders"] == "male"){
        console.log(alluser[i]["age"])
    }
}


// Q.4 Reverse array elements
const numberd = Array.from({length:100}, (_, index) => index+1);
numberd.reverse();
console.log(numberd)


//  Functions
// Q.1 find sum using functions

function sum(a,b){
    const returnvalue = a + b;
    return returnvalue;
}
let a = 4;
let b = 5;
let c = sum(a,b)
console.log(`The sum of ${a} + ${b} is ${c}`)


