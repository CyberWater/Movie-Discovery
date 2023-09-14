import React, { useState } from "react";
import Navbar from "./Navbar";
import SpaceContainer from "./utils/SpaceContainer";

const Header = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const movie = movies?.map((movie) => movie);

  // Select the first 5 movies to display initially
  const initialMovies = movies.slice(2, 7);

  const handleNextMovie = () => {
    // Increment the current movie index, looping back to 0 if we reach the end
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === initialMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMovie = initialMovies[currentMovieIndex];

  console.log({ currentMovie, initialMovies });

  return (
    <header className="w-full bg-[url('./images/Poster.png')] bg-cover bg-no-repeat h-[600px]">
      <Navbar />

      <SpaceContainer>
        <section className=" w-[404px] py-20 absolute flex">
          <div className="space-y-5">
            <h2 className="text-xl md:text-5xl font-semibold text-white ">
              John Wick 3 : Parabellum
            </h2>
            <div className="flex space-x-10 ">
              <div className="flex items-center space-x-5">
                <img src="./images/imdb.png" />
                <span className="text-lg font-light text-white">86.0/100</span>
              </div>
              <div className="flex items-center space-x-3">
                <img src="./images/toma.png" />
                <span className="text-lg font-light text-white">97%</span>
              </div>
            </div>
            <h3 className="text-xl text-white font-light">
              {" "}
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </h3>
            <div className="">
              <button className="flex text-white space-x-2 items-center bg-rose-700 px-5 py-2 rounded">
                <img src="./images/Play.png" className="w-[20px] h-[20px]" />
                <span> WATCH TRAILER</span>
              </button>
            </div>
          </div>

          <div className="text-white  item">1,2,3</div>
        </section>
      </SpaceContainer>
    </header>
  );
};

export default Header;
