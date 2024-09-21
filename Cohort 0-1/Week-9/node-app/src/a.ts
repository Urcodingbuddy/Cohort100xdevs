// type inference
// function islegal(age: number):boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// let x: boolean = islegal(15); 
// let x = islegal(15); 
// console.log(islegal(51))

// import { number } from "zod";

// // function sum(a:number, b:number):number{
// //     return a + b;
// // }
// // const ans = sum(5,5);
// // console.log(ans)

// // // number, string, boolean, null, any
// // function greet(firstname:string){
// //     console.log("hello"+firstname)
// // }
// // greet("Ansh");
// // function delayRun(){
// //     console.log("After One Second")
// // }

// // function delayHold(delay:number){
// //     setTimeout(()=>{
// //         delayRun()
// //     },delay*1000)
// // }

// // delayHold(1)

// // same with diffrent logic
// // function runAfter1S(fn: ()=> void){
// //     setTimeout(fn,1000)
// // }
// // runAfter1S(function(){
// //     console.log("hi there")
// // })

// // const greet = (name:string) => `Hellow, ${name}`
// interface User{
//     firstname:string,
//     lastname:string,
//     age:number,
//     email?:string
// }
// function islegal(user:User){
//     if(user.age > 18){
//         return true
//     }
//     else{
//         return false;
//     }
// }

// function greet(user:User){
//     console.log("Hello" + user.firstname + "GoodMorning")
// }

interface Users {
    firstname: string,
    lastname: string,
    age:number;
  }
  const userList : Users[] = [
    { firstname: "John", lastname: "Doe", age: 28 },
    { firstname: "Jane", lastname: "Smith", age: 34 },
    { firstname: "Alice", lastname: "Johnson", age: 25 },
  ]
  
  function filterUsers(users: Users[]){
    for(let i = 0; i<users.length; i++){
        console.log(users[i])
    }
  }
  
  const filteredUser = filterUsers(userList);