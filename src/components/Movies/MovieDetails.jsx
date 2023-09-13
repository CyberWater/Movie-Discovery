import React from "react";
import SpaceContainer from "../utils/SpaceContainer";

const MovieDetails = () => {
  return (
    <section className="flex">
      <div className=" h-screen w-[226px] top-36 left-28 bg-red-500 object-cover bg-no-repeat rounded-r-lg  border-gray-300">
        Hello
      </div>
      <div className="flex-1 px-5">
        <div className="bg-green-500 h-[449px]"></div>
        <section className="p-4">
          <div className="flex justify-between">
            <div className="w-3/5">
              <div className="flex items-center space-x-5">
                <h5 className="font-semibold">
                  Top Gun: Maverick • 2022 • PG-13 • 2h 10m
                </h5>
                <span className="border border-[#F8E7EB]  text-rose-500  px-4 font-semibold py-1 rounded-full">
                  Action
                </span>
                <span className="border border-[#F8E7EB]  text-rose-500  px-4 font-semibold py-1 rounded-full">
                  Drama
                </span>
              </div>
              <p className="py-2 text-[#333333]">
                After thirty years, Maverick is still pushing the envelope as a
                top naval aviator, but must confront ghosts of his past when he
                leads TOP GUN's elite graduates on a mission that demands the
                ultimate sacrifice from those chosen to fly it.
              </p>
              <div className="space-y-3">
                <div className="flex  space-x-3">
                  <h3>Director :</h3>
                  <span className="font-semibold text-rose-700">Hey hey</span>
                </div>

                <div className="flex space-x-3">
                  <h3>Writer :</h3>
                  <span className="font-semibold text-rose-700">Hey hey</span>
                </div>

                <div className="flex space-x-3">
                  <h3>Stars :</h3>
                  <span className="font-semibold text-rose-700">Hey hey</span>
                </div>
              </div>
              <div className="mt-5">
                <div className="">
                  <span className="bg-rose-700 px-2 py-2 text-white rounded-l-md">
                    Top rated movie #65
                  </span>
                  <select name="cars" className="px-32 border py-1.5">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-1/5 space-y-4">
              <div className="flex items-center space-x-1">
                <div className="flex items-center space-x-2 pl-32">
                  <img src="/images/star.png" className="" />
                  <span className="mt-1 text-lg text-gray-300 ">8.5</span>
                </div>
                <span className="mt-1 border-l-2 pl-1">350k</span>
              </div>
              <div className="flex flex-col space-y-3">
                <button className="bg-rose-600 text-white font-semibold py-2 rounded-xl">
                  See Showtimes
                </button>
                <button className="border border-rose-600 bg-rose-200 font-semibold py-2 rounded-xl">
                  More watch options
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default MovieDetails;
