import React, { useState, useEffect } from "react";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Search from "../Components/Search";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);
  console.log(videos);
  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="My list">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Original">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
