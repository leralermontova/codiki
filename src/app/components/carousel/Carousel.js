import React, { Component} from "react";
import Slider from "react-slick";
import './Carousel.scss';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import logo from './images/Lakevillagelogo.svg';

export default class Carousel extends Component {

  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings} className="slick">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </Slider>
        <div className="main-container">
          <div className="logo">
            <img src={logo} className="logoImg" alt="" />
          </div>
          <div className="slider-text">
            <div className="slider-text__header">
              <h1><strong>Lake</strong> Village</h1>
            </div>
            <div className="slider-text__paragraph">
              <p>Pozwól sobie na wymarzony <br /> Dom nad jeziorem</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
