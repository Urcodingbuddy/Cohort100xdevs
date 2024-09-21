export const PostCardSkeleton = () => {
    return (
        <div className="p-4 border-b gap-4 border-slate-200 pb-4 w-screen max-w-screen-md">
            {/* Avatar & Author */}
            <div className="pb-5 flex items-center gap-2">
                <div className="rounded-full bg-gray-300 h-10 w-10 animate-pulse"></div>
                <div className="flex flex-col gap-2">
                    <div className="h-4 bg-gray-300 w-24 animate-pulse"></div>
                    <div className="h-3 bg-gray-200 w-16 animate-pulse"></div>
                </div>
            </div>

            {/* Title */}
            <div className="h-6 bg-gray-300 w-3/4 animate-pulse mb-4"></div>

            {/* Content */}
            <div className="flex flex-col gap-3 mb-5">
                <div className="h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 w-full animate-pulse"></div>
                <div className="h-4 bg-gray-200 w-3/4 animate-pulse"></div>
            </div>

            {/* Reading Time */}
            <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
    );
};
