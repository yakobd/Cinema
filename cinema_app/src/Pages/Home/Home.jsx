import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import MovieList from "../../Components/MovieCards/Movies/MovieList/MovieList";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
