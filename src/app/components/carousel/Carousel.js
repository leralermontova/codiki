import React from "react";
import Slider from "react-slick";
import './Carousel.scss';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div style={{width: 100, height: 100}}>
          jkjkjk
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Slider>
    );
  }
}

export default Carousel;
