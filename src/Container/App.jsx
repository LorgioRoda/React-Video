import React, { useState, useEffect } from "react";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Search from "../Components/Search";
import useInitialState from "../hooks/useInitialState"

const API = "http://localhost:3000/initalState"

const App = () => {
  const initialState = useInitialState(API)
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title="My list">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Trends">
        <Carousel>
          {initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Original">
        <Carousel>
        {initialState.originals.map((item)=> (
          <CarouselItem key={item.id} {...item}/>
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
