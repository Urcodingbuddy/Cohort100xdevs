import { useEffect, useState } from "react";
import axios from "axios";

interface POST {
    'id':string,
    "title":string,
    "content":string,
    'author':{
        "name":string
    }

}
export const usePost = ({id}:{id:string}) =>{
    const backendUrl = import.meta.env.VITE_MEDIUM_BACKEND;
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<POST | null>(null);
    useEffect(()=>{
        axios.get(`${backendUrl}/post/${id}`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res =>{
            setPost(res.data.post);
            setLoading(false)
        })
    },[])
    return{
        loading,
        post
    }
}