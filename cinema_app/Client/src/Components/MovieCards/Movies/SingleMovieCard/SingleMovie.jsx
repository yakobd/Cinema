import React, { useEffect, useState } from "react";
import axios from "../../../../Utilis/axios.jsx";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import "./SingleMovie.css";

const SingleMovie = ({ fetchUrl }) => {
  const [movies, setMovie] = useState([]);
  //   const [trailerUrl, setTrailerUrl] = useState("");

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

  //   const handleClick = (movie) => {
  //     if (trailerUrl) {
  //       setTrailerUrl("");
  //     } else {
  //       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
  //         (url) => {
  //           console.log(url);
  //           const urlParams = new URLSearchParams(new URL(url).search);
  //           console.log(urlParams);
  //           console.log(urlParams.get("v"));
  //           setTrailerUrl(urlParams.get("v"));
  //         }
  //       );
  //     }
  //   };

  //   const opts = {
  //     height: "390",
  //     width: "100%",
  //     playerVars: {
  //       autoplay: 1,
  //     },
  //   };

  return (
    <div className="movie">
      <div className="single_movie">
        {movies?.map((movie, index) => (
          <div className="image_div">
            <img
              onClick={() => handleClick(movie)}
              key={index}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
              className="image"
            />
            <PlayCircleFilledWhiteIcon className="play_button" />
            <div className="info_section">
              <h1 key={index}>hi</h1>
              <div>
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
              <div className="time_Button">
                <button className="time_Buttons the_colors">8:00</button>
                <button className="time_Buttons the_colors">10:00</button>
                <button className="time_Buttons the_colors">12:00</button>
              </div>
              <div className="location">
                <LocationOnIcon className="the_color" />
                <p>Alem Cinema </p>
              </div>
              <button className="book_button the_colors">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      {/* <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div> */}
    </div>
  );
};

export default SingleMovie;
