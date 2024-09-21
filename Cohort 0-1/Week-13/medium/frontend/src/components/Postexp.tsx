import { POST } from "../hooks/PostsFetch"
import { TypeAnimation } from 'react-type-animation';
import { Appbar } from "./Appbar"
import { Avtar } from "./PostCard"

export const Postexp = ({ posts }: { posts: POST }) => {
    return (
        <div>
            <Appbar showAddPost={true}/>
            <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 md:p-6 lg:p-6">
                <div className="col-span-12 md:col-span-8 lg:p-5 md:p-5 border-b-2 pb-10 border-slate-200">
                    <div className="text-3xl md:text-5xl font-extrabold">{posts.title}</div>
                    <div className="py-3 md:py-5 text-gray-400">Posted on August 24, 2023</div>
                    <div className="text-base md:text-lg">{posts.content}</div>
                </div>
                {/* Author section */}
                <div className="col-span-12 md:col-span-4 px-5 pt-5 flex flex-col justify-start">
                    <h4 className="pb-2 font-medium">Author</h4>
                    <div className="flex items-center pt-2 pl-5">
                        <span className="w-10 text-lg">
                            <Avtar name={posts.author.name || "Anonymous"} />
                        </span>
                        <div className="ml-3 text-xl font-bold">{posts.author.name || "Anonymous"}</div>
                    </div>

                    <TypeAnimation
                        className='font-mono mt-5'
                        sequence={[
                            '"Through words, we find meaning, connect hearts, and shape the stories that define our lives."',
                        ]}
                        wrapper="p"
                        cursor={true}
                        repeat={0} // This prevents looping/backspacing
                    />
                </div>
            </div>
        </div>
    )
}