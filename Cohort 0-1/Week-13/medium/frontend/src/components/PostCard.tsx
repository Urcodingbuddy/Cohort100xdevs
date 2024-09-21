import { Link } from "react-router-dom";

interface PostCardProps {
    id:string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

export const PostCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: PostCardProps) => {
    return (
        <Link to={`/post/${id}`}>
            <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
                <div className="pb-5"><Avtar name={authorName} /> {authorName} •
                    <span className='font-thin '> {publishedDate}</span>
                </div>
                <div className="text-2xl font-bold pb-1">
                    {title}
                </div>
                <div className="font-serif mb-5">
                    {content.slice(0, 180) + '...'}
                </div>
                <div className="my-6">
                    <span className="bg-gray-200 text-sm font-medium py-1 px-2 rounded-xl m-2">
                        {`${Math.ceil(content.length / 100)} min Read`}</span>
                </div>
            </div>
        </Link>
    )
}


export function Avtar({ name }: { name: string }) {
    return <div className='relative inline-flex items-center
    justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full
    dark:bg-gray-600'>
        <span className='font-small text-gray-600 dark:text-gray-300'>
            {name[0]}
        </span>
    </div>
}