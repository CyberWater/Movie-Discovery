import React, { useEffect, useState } from "react";
import SpaceContainer from "../utils/SpaceContainer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [director, setDirector] = useState("");
  const [writers, setWriters] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
            },
            params: {
              append_to_response: "videos",
            },
          }
        );

        setMovie(response.data);

        // Extract the video URL from the response
        const videos = response.data.videos.results;
        if (videos && videos.length > 0) {
          // Use the first video as an example; you can customize this logic
          const videoKey = videos[0].key;
          setVideoUrl(`https://www.youtube.com/embed/${videoKey}`);
        }

        // Fetch movie credits
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWFiMjNjMzRlMGVhNmI2NjUyMDE5ZmQyZmNjMGJhNiIsInN1YiI6IjYxMzY2MTNjNmUwZDcyMDA2MjRjMzM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yexq3TVyd1xgDFZzrMlFmy3dLTpiAi3UqhzoNF3siYo",
            },
          }
        );

        // Extract director, writers, and stars
        const directorData = creditsResponse.data.crew.find(
          (person) => person.job === "Director"
        );
        const writerData = creditsResponse.data.crew.filter(
          (person) => person.department === "Writing"
        );
        const starData = creditsResponse.data.cast.slice(0, 5); // Get the top 5 stars

        if (directorData) {
          setDirector(directorData.name);
        }
        if (writerData) {
          setWriters(writerData.map((writer) => writer.name));
        }
        if (starData) {
          setStars(starData.map((star) => star.name));
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <Spinner />;
  }

  return (
    <section className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-[326px] rounded-r-[40px] border border-gray-300 hidden md:block">
        <div className="flex-1">
          <Link to="/">
            <div className="flex items-center space-x-1 px-10 py-10">
              <img
                src="/images/tv.png"
                alt="Movie Box Logo"
                className="w-10 md:w-12 h-12 mr-2"
              />
              <h1 className="text-2xl font-semibold">Movie Box</h1>
            </div>
          </Link>
          <div className="py-5 space-y-10">
            <li className="list-none py-8 px-12 font-bold text-gray-500 hover:text-rose-800 hover:bg-[#BE123C]/10 hover:border-r-8 hover:border-rose-800">
              Home
            </li>
            <li className="list-none py-8 px-12 font-bold text-gray-500 hover:text-rose-800 hover:bg-[#BE123C]/10 hover:border-r-8 hover:border-rose-800">
              Movies
            </li>
            <li className="list-none py-8 px-12 font-bold text-gray-500 hover:text-rose-800 hover:bg-[#BE123C]/10 hover:border-r-8 hover:border-rose-800">
              TV Series
            </li>
            <li className="list-none py-8 px-12 font-bold text-gray-500 hover:text-rose-800 hover:bg-[#BE123C]/10 hover:border-r-8 hover:border-rose-800">
              Upcoming
            </li>
          </div>
        </div>
        <div className="">
          <div className="flex items-center flex-col w-[210px] border mx-10 rounded-2xl border-rose-300 px-5 py-8">
            <h1 className="py-2 font-semibold">
              Play movie quizzes and earn free tickets
            </h1>
            <p>50k people are playing now</p>
            <button className="bg-[#BE123C]/40 px-8 md:px-12 text-[#BE123C] my-2 rounded-full py-2">
              Start Play
            </button>
          </div>
          <li className="list-none py-8 mt-3 px-12 font-bold text-gray-500 hover:text-rose-800 hover:bg-[#BE123C]/10 hover:border-r-8 hover:border-rose-800">
            Logout
          </li>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-5">
        <div className="md:h-[629px] h-auto pt-2 rounded-full">
          {videoUrl && (
            <iframe
              src={videoUrl}
              title="Movie Trailer"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          )}
        </div>
        <section className="p-4 mt-5">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-3/5 space-y-3">
              <div className="flex items-center space-x-3">
                <h5 className="font-semibold">
                  {movie.original_title} • {movie.release_date} • PG-13 •{" "}
                  {movie.runtime}m
                </h5>
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="border border-[#F8E7EB] text-rose-500 px-3 md:px-4 font-semibold py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
              <p className="py-2 text-[#333333]">{movie.overview}</p>
              <div className="space-y-3 md:space-y-7">
                <div className="flex items-center space-x-3">
                  <h3>Director :</h3>
                  <span className="font-semibold text-rose-700">
                    {director}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <h3>Writer :</h3>
                  <span className="font-semibold text-rose-700">
                    {writers.join(", ")}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <h3>Stars :</h3>
                  <span className="font-semibold text-rose-700">
                    {stars.join(", ")}
                  </span>
                </div>
              </div>
              <div className="mt-5 md:mt-10">
                <span className="bg-rose-700 px-2 py-1 text-white rounded-l-md">
                  Top rated movie #65
                </span>
                <select name="cars" className="px-28 md:px-32 border py-1.5">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-1/5 space-y-4 md:mt-0 mt-5">
              <div className="flex items-center space-x-1">
                <div className="flex items-center space-x-2">
                  <img src="/images/star.png" className="w-4 h-4 md:w-6 md:h-6" />
                  <span className="mt-1 text-lg md:text-xl text-gray-300">
                    {movie.vote_average}
                  </span>
                </div>
                <span className="mt-1 border-l-2 pl-1 font-medium">
                  {movie.vote_count}k
                </span>
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
