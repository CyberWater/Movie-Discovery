import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import FeaturedMovies from "./components/Movies/FeaturedMovies";
import Footer from "./components/Movies/Footer";
// import getTrendingVideos from "./utils/tmdbApi";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/Movies/MovieDetails";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
