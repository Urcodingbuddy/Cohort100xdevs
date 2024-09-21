import { Appbar } from "./Appbar";

export const PostexpSkeleton = () => {
    return (
        <div>
            {/* Skeleton for Appbar */}
            <Appbar showAddPost={true} />
            <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 md:p-6 lg:p-6 animate-pulse">
                {/* Left column skeleton (Post content) */}
                <div className="col-span-12 md:col-span-8 lg:p-5 md:p-5 border-b-2 pb-10 border-slate-200">
                    {/* Skeleton Title */}
                    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-2/4 mb-4"></div>

                    {/* Skeleton Date */}
                    <div className="h-5 bg-gray-200 rounded w-1/4 mb-6"></div>

                    {/* Skeleton Content */}
                    <div className="space-y-4">
                        <div className="h-5 bg-gray-400 rounded w-full"></div>
                        <div className="h-5 bg-gray-400 rounded w-full"></div>
                        <div className="h-5 bg-gray-300 rounded w-11/12"></div>
                        <div className="h-5 bg-gray-400 rounded w-10/12"></div>
                        <div className="h-5 bg-gray-300 rounded w-10/12"></div>
                        <div className="h-5 bg-gray-400 rounded w-10/12"></div>
                        <div className="h-5 bg-gray-400 rounded w-10/12"></div>
                        <div className="h-5 bg-gray-400 rounded w-10/12"></div>
                        <div className="h-5 bg-gray-300 rounded w-9/12"></div>

                    </div>
                </div>

                {/* Right column skeleton (Author Section) */}
                <div className="col-span-12 md:col-span-4 px-5 pt-5 flex flex-col justify-start">
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>

                    {/* Skeleton for Avatar and Name */}
                    <div className="flex items-center pt-2 pl-5">
                        <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                        <div className="ml-3 h-6 bg-gray-200 rounded w-32"></div>
                    </div>

                    {/* Skeleton for Animation text placeholder */}
                    <div className="mt-5">
                        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                        <div className="h-6 bg-gray-200 rounded w-10/12"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
