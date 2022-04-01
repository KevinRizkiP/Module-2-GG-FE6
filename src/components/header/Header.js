import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div>
      <header className="absolute top-5 right-8">
        <div>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <SearchIcon className="h-5 w-5 text-gray-500" />
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-2 text-sm w-full text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search..."
              autocomplete="off"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
