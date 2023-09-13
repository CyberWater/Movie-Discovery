import React from "react";
import FeaturedMoviesCard from "./FeaturedMovieCard";
import SpaceContainer from "../utils/SpaceContainer";

const FeaturedMovies = ({ movies }) => {

  return (
    <div className="my-20">
      <SpaceContainer>
        <section className="flex my-20">
          <div className=" flex justify-between items-center w-full">
            <h1 className="text-xl font-bold">Featured Movies</h1>
            <div className="flex items-center justify-center space-x-2">
              <span className="font-base text-sm text-rose-700">See more</span>
              <img
                src="/images/Chevron right.png"
                className="w-5 h-5 object-cover mt-1"
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-4 grid-rows-3 gap-16">
          {/* Your grid items go here */}
          {/* {Array.from({ length: 12 }, (_, index) => (
            <FeaturedMoviesCard key={index} />
          ))} */}
          {movies?.map((movie) => (
            <FeaturedMoviesCard key={movie.id} movie={movie} />
          ))}
        </div>
      </SpaceContainer>
    </div>
  );
};

export default FeaturedMovies;
