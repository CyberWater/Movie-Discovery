import React, { useState } from "react";
import Navbar from "./Navbar";
import SpaceContainer from "./utils/SpaceContainer";

const Header = ({ movies }) => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // Select the first 5 movies to display initially
  const initialMovies = movies.slice(2, 7);

  const handleNextMovie = () => {
    // Increment the current movie index, looping back to 0 if we reach the end
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === initialMovies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMovie = initialMovies[currentMovieIndex];

  return (
    <header className="w-full bg-[url('/images/Poster.png')] bg-cover bg-no-repeat h-[600px] md:h-[800px] lg:h-[1000px]">
      <Navbar />

      <SpaceContainer>
        <section className="w-full md:w-[404px] py-5 md:py-20 absolute flex">
          <div className="space-y-3 md:space-y-5">
            <h2 className="text-lg md:text-5xl font-semibold text-white">
              John Wick 3: Parabellum
            </h2>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-10">
              <div className="flex items-center space-x-2 md:space-x-5">
                <img src="/images/imdb.png" alt="IMDb" />
                <span className="text-sm md:text-lg font-light text-white">
                  86.0/100
                </span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-5">
                <img src="/images/toma.png" alt="Tomatometer" />
                <span className="text-sm md:text-lg font-light text-white">
                  97%
                </span>
              </div>
            </div>
            <h3 className="text-sm md:text-xl text-white font-light">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </h3>
            <div className="mt-3 md:mt-5">
              <button className="flex text-white space-x-2 items-center bg-rose-700 px-3 md:px-5 py-2 rounded">
                <img src="/images/Play.png" alt="Play" className="w-6 h-6" />
                <span>WATCH TRAILER</span>
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
