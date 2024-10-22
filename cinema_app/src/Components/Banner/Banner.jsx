import React, { useEffect, useState } from "react";
import axios from "../../Utilis/axios.jsx";
import requests from "../../utilis/requests.jsx";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Banner.css";
import "../Calander/Calender.css";
import Calender from "../Calander/Calender.jsx";
import MovieList from "../MovieCards/Movies/MovieList/MovieList.jsx";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="banner_Background"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "none",
      }}
    >
      <div className="calender">
        <Calender className="calender_side" />
      </div>
      <div>
        <MovieList />
      </div>
    </div>
  );
}

export default Banner;
