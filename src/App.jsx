import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import FeaturedMovies from "./components/Movies/FeaturedMovies";
import Footer from "./components/Movies/Footer";
// import getTrendingVideos from "./utils/tmdbApi";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const config = {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjRhNDY1MjgyZjY0YWE0M2FhZTViOWJkYmM4YjRhZiIsInN1YiI6IjY0ZTUxNzkxZTBjYTdmMDBjNjY1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJXb42a-MPqirvlTKwSGP2NkOT1OlbsfbKYviP4jsbk",
        },
      };

      const res = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day",
        config
      );
      setMovies(res.data);
    };
    fetch();
  }, []);

  console.log(movies);
  return (
    <div className="">
      <Header />
      <FeaturedMovies />
      <Footer />
    </div>
  );
}

export default App;
