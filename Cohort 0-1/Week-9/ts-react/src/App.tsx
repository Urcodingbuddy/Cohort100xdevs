import React from 'react';
import { useState } from 'react'
import { number } from 'zod';

// import './App.css'
interface Person{
  name: string;
  age?: number; // age?  ->  "?" represent its optional
  greet(phrase: string): void;
}

type User = {
  firstname: string;
  lastname: string;
  age: number;
}

function islegal(user: User){
  
}

class Employee implements Person{
  name: string;
  age?: number;
  constructor(n: string, a: number){
    this.name = n;
    this.age = a; 
  }
  greet(phrase: string): void {
      console.log(`${phrase} ${this.name}`)
  }
}
const e = new Employee("Ansh", 18)
console.log(e.greet)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo title='Go to study'
            description='Code for long time'
            done={true}
      />
    </>
  )
}
interface TodoProp{
  title:string,
  description:string,
  done:boolean,
}
function Todo(props: TodoProp){
  return <div className='border h-44 w-56 font-serif text-xl'>
    <h2>
      {props.title}
    </h2>
    <h3>
      {props.description}
    </h3>
    <input type="checkbox" />
    Done
  </div>
}

export default App

type greetArg = number | string;
function greet(id: greetArg){

}

greet(1);
greet(1);


type Employe = {
  name: string,
  startDate:Date
}

interface Manager {
  name: string,
  department: string
}

type TechLead = Employe & Manager
const t: TechLead = {
  name:"Ansh Pethe",
  startDate: new Date(),
  department: "Software engineering"
}

function printTechLeadDetails(techLead: TechLead) {
  console.log(`Name: ${techLead.name}`);
  console.log(`Start Date: ${techLead.startDate}`);
  console.log(`Department: ${techLead.department}`);
}

printTechLeadDetails(t);


console.log(t.name); // Output: "Ansh Pethe"
console.log(t.startDate); // Output: Current Date (e.g., 2024-08-22T00:00:00.000Z)
console.log(t.department); // Output: "Software engineering"


class TechLeadClass implements TechLead {
  name: string;
  startDate: Date;
  department: string;

  constructor(name: string, startDate: Date, department: string) {
    this.name = name;
    this.startDate = startDate;
    this.department = department;
  }

  // Additional methods specific to TechLead
  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Start Date: ${this.startDate}`);
    console.log(`Department: ${this.department}`);
  }
}

const techLead = new TechLeadClass("Ansh Pethe", new Date(), "Software Engineering");
techLead.printDetails();

type numberarr = number[]
function Maxvalue(arr:numberarr){
  let max = 0;
  for(let i = 0; i<arr.length; i++){
    if(arr[i]> max){
      max = arr[i]
    }
  }
  return max;
}
const ans = Maxvalue([1, 2, 3]);
console.log(ans)


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
console.log(filterUsers)