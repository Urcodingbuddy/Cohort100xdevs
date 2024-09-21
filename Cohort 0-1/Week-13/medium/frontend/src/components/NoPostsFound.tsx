// import React from "react";
import Notfound from '../assets/404Notfound.svg'

export const NoPostsFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <img
                src={Notfound}// Replace with your image path
                alt="No Posts Found"
                className="w-96 h-96 mb-4"
            />
            <h2 className="text-2xl font-bold  ">No Posts Found</h2>
            <p className="text-gray-600 mx-3 mb-2">
                It looks like there are no posts matching your search. Try using different keywords or check back later!
            </p>
        </div>
    );
};
