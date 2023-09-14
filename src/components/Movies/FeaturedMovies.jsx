import React from "react";
import FeaturedMoviesCard from "./FeaturedMovieCard";
import SpaceContainer from "../utils/SpaceContainer";

const FeaturedMovies = ({ movies }) => {
  return (
    <div className="my-20">
      <SpaceContainer>
        <section className="flex flex-col md:flex-row lg:flex-row my-6 md:my-10 lg:my-12">
          <div className="w-full md:w-2/3 lg:w-2/3 mb-6 md:mb-0 lg:mb-0">
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
              Featured Movies
            </h1>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 flex items-center justify-center space-x-2">
            <span className="font-base text-sm text-rose-700">See more</span>
            <img
              src="/images/Chevron right.png"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 object-cover mt-1"
            />
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-3 md:grid-rows-2 lg:grid-rows-2 gap-4 md:gap-6 lg:gap-8">
          {movies?.map((movie) => (
            <FeaturedMoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      </SpaceContainer>
    </div>
  );
};

export default FeaturedMovies;

