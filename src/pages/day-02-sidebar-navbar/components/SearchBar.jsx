import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <form className="my-2 mx-3" role="search">
      <label htmlFor="search" className="sr-only">Search</label>

      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white outline-1 -outline-offset-1 outline-slate-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-500">
        <RiSearch2Line className="text-gray-400 text-lg"/>
        <input type="search" placeholder="Search" className="text-sm w-full outline-none placeholder-gray-400"/>
      </div>
    </form>
  );
};

export default SearchBar;
