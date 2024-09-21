
import { number, string } from "zod";
// interface User{
//     name: string;
//     age: number;
// }
// function sumOfAge(user1: User,user2: User){
//     return user1.age + user2.age;
// }
// const ageCalc = sumOfAge({
//     name: 'Taro',
//     age: 20
// },{
//     name: 'jiro',
//     age:30
// })

// console.log(ageCalc)


// interface User {
//     id:string;
//     name:string;
//     age:number;
//     email:string;
//     password:string;
// }

// type updateProps = Pick<User, 'name'| 'age' | 'password'>
// type updatePropsOpt = Partial<updateProps>

// function updateUser(updateProps: updatePropsOpt){

// }

// updateUser({
//     name:"Ansh",
//     age:39,
//     password:"newpass"
// })
// const displayUserPro = (user:updateProps) => {
//     console.log(`Name: ${user.name}, Age: ${user.age}`);
// }
// const userr = {
//     name: "Ansh Pethe",
//     age: 21
// }
// type Userr = {
//     name:string;
//     age: number;
//     email:string;
// }
// const users = new Map<string, Userr>()
// users.set('rdfbh3',{name:'reas', age: 30, email:'anshgwd19@gmail.com'})
// const user = users.get("rdfbh3")
// console.log(user)

// user.name = "Ansh"
// console.log(user.name)

// const a = [1,2,3]
// a[0] = 6
// console.log(a)

// // ReadOnly
// type User = {
//     readonly name    : string;
//     readonly age     : number;
//     readonly country : string;
// }
// instead of This 
// we can do 
// type User = {
//     name    : string;
//     age     : number;
//     country : string;
// }
// const user: Readonly<User> = {
//     name: 'john',
//     age:45,
//     country:'USA'
// }
// user.age =  64   "Not Allowd"
// console.log(user.age)

// type User = {
//     id:string;
//     username: string
// }
// type Users = {
//     [key:string]: User;
// }
// instead of this we can do 
// type Users = Record<string, {name: string,age:number}>;

// const users : Users = {
//     "wrwqes3" : {name: "ansh", age: 18},
//     "rassdf3" : {name: "shree",age: 19}
// }
// const users = {
//     "Ansh":{
//         id:'24234',
//         username: 'ansh'
//     },
//     'Shri':{
//         id:'23342',
//         username:'Shriyanshu'
//     },
//     'saifu':{
//         id:'45648',
//         username:'saifu'
//     }
// }

// Pick
interface User {
    id:number;
    name:string;
    email:string;
    createdAt:Date;
}
type UserProfile = Pick<User, 'name'|'email'>;
const displayUserPro = (user: UserProfile) =>{
    console.log(`Name: ${user.name} \nEmail: ${user.email} `)
}
const userProfile : UserProfile = {
    name: "Ansh Pethe",
    email: 'ansh.pethe@gmail.com'
}
displayUserPro(userProfile)

// Exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExculdeEvent = Exclude<EventType,'scroll'>;
const handleEvent = (event: ExculdeEvent)=>{
    console.log(`Handling event: ${event}`);
};
handleEvent('click');


// 

import { z } from 'zod';
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;


app.put("/user", (req, res) => {
const result = userProfileSchema.safeParse(req.body);
const {success, error} = result;

  if (!success) {
    res.status(400).json({ error: error?.issues});
    return;
  }

// Type of updateBody is inferred from userProfileSchema
  const updateBody: FinalUserSchema = req.body;

// update database here
  res.json({
    message: "User updated",
    updateBody
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
