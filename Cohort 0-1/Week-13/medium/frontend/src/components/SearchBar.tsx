import searchIcon from '../assets/searchIcon.svg'
import React from "react";

interface SearchBarProps {
    searchQuery: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, onSearch }) => {
    return (
        <div className="w-100 relative">
            <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
            <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={onSearch}
                className="pl-12 pr-4 py-2 border rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}
