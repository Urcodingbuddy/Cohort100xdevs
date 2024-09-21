import { Appbar } from "../components/Appbar"
import { PostCard } from "../components/PostCard"
import { usePosts } from "../hooks/PostsFetch"
import { useRecoilState } from "recoil";
import { searchQueryState } from "../state/searchState"; // Ensure correct path
import { PostCardSkeleton } from "../components/PostCardSkeleton";
import { NoPostsFound } from "../components/NoPostsFound";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Post {
    id: string;
    title: string;
    content: string;
    author: { name: string };
}

export const Posts = () => {
    const navigate = useNavigate();
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
    }, [navigate]);
    // @ts-ignore
    const { loading, posts } = usePosts();
    const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
    (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    };
    
    const filteredPosts = posts.filter((post: Post)=>{
        const title = post.title ? post.title.toLowerCase() : "";
        const content = post.content ? post.content.toLowerCase() : "";
        const authorName = post.author.name ? post.author.name.toLowerCase() : "Anonymous"
        const searchWords = searchQuery.trim().split(/\s+/);
        return searchWords.some((word) => title.includes(word) || content.includes(word) || authorName.includes(word) );
    })
    

    return (
        <div className="w-full items-center m-auto">
            <Appbar showSearchBar={true} showAddPost={true}/>
            <div className="w-full m-auto flex justify-center">
            <div className="grid grid-cols-1 gap-4">
                { loading && <>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                    <PostCardSkeleton/>
                </>  },
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post: any) => (
                            <PostCard
                                key={post.id}
                                id={post.id}
                                authorName={post.author.name || "Anonymous"}
                                title={post.title}
                                content={post.content}
                                publishedDate={"Sep 14, 2024"}
                            />
                        ))
                    ) : (
                        <NoPostsFound />
                    )}
                </div>
            </div>
        </div>
    )
} 