import React from "react";
import "./MovieList";
import "../SingleMovieCard/SingleMovie";
import SingleMovie from "../SingleMovieCard/SingleMovie";
import requests from "../../../../Utilis/requests";

function MovieList() {
  return (
    <div>
      <SingleMovie fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default MovieList;
