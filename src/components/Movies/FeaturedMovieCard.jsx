import React, { useEffect, useState } from "react";
import SpaceContainer from "../utils/SpaceContainer";
import axios from "axios";

const FeaturedMovieCard = ({ movie }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const config = {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWFiMjNjMzRlMGVhNmI2NjUyMDE5ZmQyZmNjMGJhNiIsInN1YiI6IjYxMzY2MTNjNmUwZDcyMDA2MjRjMzM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yexq3TVyd1xgDFZzrMlFmy3dLTpiAi3UqhzoNF3siYo",
          },
        };
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            config,
          }
        );
        const genreMap = {};
        response.data.genres.forEach((genre) => {
          genreMap[genre.id] = genre.name;
        });
        setGenres(genreMap);
      } catch (error) {
        console.error("Error fetching genres: ", error);
      }
    };

    fetchGenres();
  }, []);
  return (
    <div className=" p-4 rounded-md w-[250px] h-[490px]">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="w-[250px] h-[370px] object-cover"
        />
        <span className="absolute rounded-full p-1 bg-gray-100/40 top-5 left-44">
          <img src="/images/heart.png" className="w-6 h-6 " />
        </span>

        <div className="absolute top-5 ml-2 ">
          <p className="text-white px-3 bg-gray-100/40 rounded-full">
            {movie.media_type}
          </p>
        </div>
      </div>
      <div className=" py-2 space-y-2">
        <p className="text-xs font-semibold text-gray-400">
          {movie.release_date}, {movie.status}
        </p>
        <h3 className="text-xl font-bold line-clamp-1">
          {movie.original_title}
        </h3>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <img src="/images/imdb.png" />
            <span>{movie.vote_average}/100</span>
          </div>
          <div className="flex space-x-3 items-center">
            <img src="/images/toma.png" />
            <span>{movie.vote_average * 10}%</span>
          </div>
        </div>
        <p className="text-gray-400 font-semibold">
          {movie.genre_ids
            .map((genreId) => genres[genreId])
            .filter(Boolean)
            .join(", ")}
        </p>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
