import React from 'react';
import SpaceContainer from './utils/SpaceContainer';

const Navbar = () => {
  return (
    <SpaceContainer>
      {/* Use flex-row to make items in a row on mobile */}
      <nav className="bg-transparent py-3 md:py-6 px-2 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img
            src="./images/tv.png"
            alt="Movie Box Logo"
            className="w-8 md:w-10 h-10 mr-2"
          />
          <h1 className="text-white text-lg md:text-2xl font-semibold">
            Movie Box
          </h1>
        </div>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex mt-4 md:mt-0 items-center w-full md:w-auto flex-row">
          <div className="relative flex w-full md:w-[525px]">
            <input
              placeholder="What do you want to watch?"
              className="bg-transparent placeholder-text-white border-2 border-white rounded-md py-1 px-4 w-full focus:outline-none text-white"
            />
            <img
              src="./images/Search.png"
              alt="Search"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 md:w-6 h-6"
            />
          </div>
        </div>

        {/* Sign-In Button */}
        <button className="text-white py-2 px-4 text-sm md:text-base mt-4 md:mt-0">
          Sign In
        </button>

        {/* Image */}
        <img
          src="./images/Menu alt 4.png"
          alt="#"
          className="w-6 md:w-8 h-8 rounded-full bg-rose-700 mt-4 md:mt-0"
        />
      </nav>
    </SpaceContainer>
  );
};

export default Navbar;
