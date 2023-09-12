import React from "react";
import SpaceContainer from "../utils/SpaceContainer";

const FeaturedMovieCard = () => {
  return (
    <div className=" p-4 rounded-md w-[250px] h-[490px]">
      <div className="relative">
        <img
          src="/images/mimg.png"
          className="w-[250px] h-[370px] object-cover"
        />
        <span className="absolute rounded-full p-1 bg-gray-100/40 top-5 left-44">
          <img src="/images/heart.png" className="w-6 h-6 " />
        </span>

        <div className="absolute top-5 ml-2 ">
          <p className="text-white px-3 bg-gray-100/40 rounded-full">
            TV SERIES
          </p>
        </div>
      </div>
      <div className=" py-2 space-y-2">
        <p className="text-xs font-semibold text-gray-400">
          USA, 2016 - Current
        </p>
        <h3 className="text-xl font-bold">Stranger Things</h3>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img src="/images/imdb.png" />
            <span>86.0/100</span>
          </div>
          <div className="flex space-x-3 items-center">
            <img src="/images/toma.png" />
            <span>97%</span>
          </div>
        </div>
        <p className="text-gray-400 font-semibold">Action, Adventure, Horror</p>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
