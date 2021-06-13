import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import Categories from "../Components/Categories";
import Search from "../Components/Search";

const Home = ({ mylist, trends, originals }) => {
  return (
    <>
      <Search />
      {mylist.length > 0 && (
        <Categories title="Mis videos">
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem key={item.id} {...item} isList /> //validation
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Trends">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Original">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals, //only necessary components
  };
};

export default connect(mapStateToProps, null)(Home); //map the contect and actions
