'use client'
import { signup } from '@/app/actions/user'
import { useState } from "react"

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [name, setName] = useState('');
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center ">
                <div className="flex flex-col p-10 gap-5 border  border-gray-500">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" className="w-64 border-b-4 text-black" placeholder="Name" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} className="w-64 border-b-4 text-black" type="text" placeholder="Username" name="username" id="email" />
                    <label htmlFor="pass">Password</label>
                    <input onChange={(e) => {
                        setpassword(e.target.value)
                    }} className="w-64 border-b-4 text-black" type="password" placeholder="Password" name="password" id="pass" />
                    <button onClick={() => {
                        const res = signup(name, email, password)
                        console.log(res)
                    }} className="w-64 border-b-4 bg-blue-600">Signup</button>
                </div>
            </div>
        </div>
    )
}