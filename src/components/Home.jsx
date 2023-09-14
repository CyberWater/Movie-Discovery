import React, { useEffect, useState } from "react";
import Header from "./Header";
import FeaturedMovies from "./Movies/FeaturedMovies";
import axios from "axios";
import Footer from "./Movies/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWFiMjNjMzRlMGVhNmI2NjUyMDE5ZmQyZmNjMGJhNiIsInN1YiI6IjYxMzY2MTNjNmUwZDcyMDA2MjRjMzM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yexq3TVyd1xgDFZzrMlFmy3dLTpiAi3UqhzoNF3siYo",
        },
      };

      // You can customize the query parameters to match your requirements.
      const queryParams = {
        sort_by: "popularity.desc", // Sort by popularity, you can change this
        page: 1, // The page number, you can paginate through the results
      };

      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          ...config,
          params: queryParams,
        }
      );
      setMovies(res.data.results);
    };

    fetchAllMovies();
  }, []);
  return (
    <div>
      {" "}
      <Header movies={movies} />
      <FeaturedMovies movies={movies} />
      <Footer />
    </div>
  );
};

export default Home;
