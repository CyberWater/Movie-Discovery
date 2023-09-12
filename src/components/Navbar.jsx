import React from 'react'
import SpaceContainer from './utils/SpaceContainer'

const Navbar = () => {
  return (
    <SpaceContainer>
       <nav className="bg-transparent py-6 px-2 flex items-center justify-between">
            {/* Logo and Title */}

            <div className="flex items-center gap-[24px]">
                <img
                    src="./images/tv.png"
                    alt="Movie Box Logo"
                    className="w-50 h-50 mr-2"
                />
                <h1 className="text-white text-2xl font-semibold">Movie Box</h1>
            </div>

            {/* Search Bar */}
            <div className='border-2 py-1  flex rounded-md w-[525px] px-4  items-center'>
              <input
               placeholder='What do you want to watch?'
               className='bg-transparent placeholder:text-white border-none focus:outline-none text-white w-full'/>
              <img src="./images/Search.png" className='flex-end'/>
            </div>
            {/* <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="rounded-l-lg py-2 px-4 outline-none focus:ring focus:ring-blue-400 flex-grow"
                />
                <button className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700 focus:ring focus:ring-blue-400">
                    Search
                </button>
            </div> */}

            {/* Sign-In Button */}
            <div className="flex items-center gap-[27px]">
            <button className=" text-white py-2 px-4 ">
                Sign In
            </button>
            <img 
               src="./images/Menu alt 4.png"
                    alt="#"
                    className="w-[36px] h-[36px] mr-2 rounded-full bg-rose-700"
            />
            </div>
        </nav>
    </SpaceContainer>
  )
}

export default Navbar