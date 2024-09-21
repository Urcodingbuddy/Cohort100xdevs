// type KeyInput = "up" | "down" | "left" | "right";
enum Direction {
    // Up = "up",
    // Down = "down",
    // Left = "left",
    // Right = "right"

    Up = 10,
    Down,
    Left, 
    Right 
}

function doSomthing(keyPressed: Direction) {
    if (keyPressed == Direction.Up) {

    }
}
doSomthing(Direction.Up);

function identity<arg>(arg: arg[]): arg{
    return arg[0];
}
interface User {
    name: string;
}
let out = identity<User>([{name: "Ansh"}])
let output1 = identity(["myString", "mysring2",])
let output2 = identity([2,3])
output1.toUpperCase();
console.log(output1)
// const express = require("express");
import express from "express"
const app = express()