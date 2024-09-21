import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Signupinput } from "@anshpethe/medium-common";
import { LebelledInput } from "./LabelledInput";
import axios from "axios";


export const Auth = ({ type }: { type: 'signup' | 'signin' }) => {
    
    const backendUrl = import.meta.env.VITE_MEDIUM_BACKEND; 
    console.log("Backend URL:", backendUrl);
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<Signupinput>({
        name: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        // Check if a token exists in localStorage
        const token = localStorage.getItem('token');
        if (token) {
            // If a token exists, redirect to /posts
            navigate("/posts");
        } else{
            // If it's the signin page and no token, redirect to signin page
            navigate("/signin");
        }
    }, [navigate, type]);

    async function sendRequest(){
        try {
            const res = await axios.post(`${backendUrl}/user/${type==="signin"?'signin':'signup'}`,postInputs)
            const jwt = res.data.jwt;
            const name = res.data.user.name;
            if(jwt){
                localStorage.setItem('token', jwt);
                localStorage.setItem('name',name)
                navigate("/posts");
            }else{
                console.error('Token not found in Response')
            }
        } catch (error) {
            console.error("Error during the request:", error);
        }
    }

    return (
        <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="border-4 rounded-lg p-8 pt-18 pb-18 select-none">
                    <div className="pb-2">
                        <div className="text-3xl font-extrabold w-86 text-center">
                            {type === "signup" ? "Create an Account" : " Sign-In "}
                        </div>
                        <div className="text-slate-500 text-center">
                            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
                            <Link className="hover:underline text-gray-700 font-bold" to={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Sign in" : "Sign up"}</Link>
                        </div>
                    </div>
                    <div className="pt-4">

                        {type === "signup" && (
                            <LebelledInput
                                label="Name (optional)"
                                type={"name"}
                                placeholder="John Doe"
                                onChange={(e) => {
                                    setPostInputs({
                                        ...postInputs,
                                        name: e.target.value
                                    });
                                }}
                            />
                        )}

                        <LebelledInput label="Email" type={"email"} placeholder="John@example.com" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            })
                        }} />


                        <LebelledInput label="Password" type={"password"} placeholder="password" onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                    </div>
                    <div className="pt-5">
                        <button onClick={sendRequest} type="button" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type === "signin" ? "SignIn" : "Signup"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

