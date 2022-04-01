import React from "react";

import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white text-xl">
          <HomeIcon className="h-9 w-9" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white text-xl" >
          <SearchIcon className="h-9 w-9" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white text-xl">
          <LibraryIcon className="h-9 w-9" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white text-xl">
          <PlusCircleIcon className="h-9 w-9"/>
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white text-xl">
          <HeartIcon className="h-9 w-9" />
          <p>Liked Songs</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* playlists */}
        <p className="cursor-pointer hover:text-white text-xl">Playlist name...</p>
        <p className="cursor-pointer hover:text-white text-xl">Playlist name...</p>
        <p className="cursor-pointer hover:text-white text-xl">Playlist name...</p>
      </div>
    </div>
  );
}

export default Sidebar;
