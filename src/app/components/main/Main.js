import React from 'react';
import Carousel from '../carousel/Carousel';
import About from '../about/about';
import PodKlucz from '../podklucz/PodKlucz';
import Cookies from '../cookies/Cookies';

const Home = () => (
  <div className="app">
    <Carousel />
    <About />
    <PodKlucz />
    <Cookies />
  </div>
);

export default Home;
