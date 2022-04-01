import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Header from "../header/Header";

const SearchContent = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="flex-grow overflow-y-scroll scrollbar-hide h-screen">
      <Header />
      <form onSubmit={(e) => setSearch(e.target.value)}>
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <SearchIcon className="h5 w-5" />
            </button>
          </span>
          <input
            type="search"
            name="q"
            class="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchContent;
