import { Postexp } from "../components/Postexp";
import { PostexpSkeleton } from "../components/PostexpSkeleton";
import { usePost } from "../hooks/usePost"
import { useParams } from "react-router-dom";


export const Post = () =>{
    const { id } = useParams<{ id: string }>();
    const {loading, post} = usePost({
        id: id || "",
    });
    if(loading){return <PostexpSkeleton/> }
    if (!post) {
        return <div>No post found</div>; // Handle the case when post is not found
    }
    return (
        <>
            
            <Postexp posts={post}/>
        </>
    )
}