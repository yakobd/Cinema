import React from "react";
import "./MovieList.css";
import "../SingleMovieCard/SingleMovie";
import SingleMovie from "../SingleMovieCard/SingleMovie";
import requests from "../../../../Utilis/requests";
import ComingSoon from "../../ComingSoon/ComingSoon";

function MovieList() {
  return (
    <div className="MoviePage">
      <SingleMovie
        fetchUrl={requests.fetchHorrorMovies}
        className="Normal_movies"
      />
      <ComingSoon
        fetchUrl={requests.fetchTopRatedMovies}
        className="coming_soon"
      />
    </div>
  );
}

export default MovieList;
