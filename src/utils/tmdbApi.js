import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const config = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjRhNDY1MjgyZjY0YWE0M2FhZTViOWJkYmM4YjRhZiIsInN1YiI6IjY0ZTUxNzkxZTBjYTdmMDBjNjY1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJXb42a-MPqirvlTKwSGP2NkOT1OlbsfbKYviP4jsbkeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjRhNDY1MjgyZjY0YWE0M2FhZTViOWJkYmM4YjRhZiIsInN1YiI6IjY0ZTUxNzkxZTBjYTdmMDBjNjY1OTYzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJXb42a-MPqirvlTKwSGP2NkOT1OlbsfbKYviP4jsbk;zxs",
  },
};

const getTrendingVideos = axios.get("/trending/movie/day", config);

export default { getTrendingVideos, getMovieByGenreId };
