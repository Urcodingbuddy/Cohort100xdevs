import { useEffect, useState } from "react"
import axios from "axios";

export interface POST {
    'id':string,
    "title":string,
    "content":string,
    'author':{
        "name":string
    }

}
export const usePosts = () =>{
    const backendUrl = import.meta.env.VITE_MEDIUM_BACKEND;
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<POST[]>([]);
    useEffect(()=>{
        axios.get(`${backendUrl}/post/bulk`,{
            headers:{
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res =>{
            setPosts(res.data.posts);
            setLoading(false)
        })
    },[])
    return{
        loading,
        posts
    }
}