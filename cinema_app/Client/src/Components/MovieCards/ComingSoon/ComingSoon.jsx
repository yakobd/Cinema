import React, { useEffect, useState } from "react";
import axios from "../../../Utilis/axios.jsx";
import requests from "../../../Utilis/requests.jsx";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./ComingSoon.css";

const ComingSoon = ({ fetchUrl }) => {
  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="Coming_soon_title"> Coming Soon </h1>
      <div className="coming_soon_div">
        {movies?.map((movie, index) => (
          <div
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
              backgroundPosition: "center",
              backgroundRepeat: "none",
            }}
          >
            <div className="banner_contents">
              <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="coming_soon_rate">
                <ul>
                  <li className="side_by_side ">
                    <StarBorderIcon className="the_color" />
                    8.4
                  </li>
                  <li className="side_by_side">movie type</li>
                  <li className="side_by_side">
                    <AccessTimeIcon className=".the_color" />
                    2hr2min
                  </li>
                </ul>
              </div>
              <div className="location">
                <LocationOnIcon className="the_color" />
                <p>Alem Cinema </p>
              </div>
              <div className="banner_buttons">
                <button className="book_button the_colors">Add To List</button>
              </div>
            </div>
            {/* 
            <div className="banner_fadeButton" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComingSoon;
