import React, { Component} from "react";
import Slider from "react-slick";
import './PodKlucz.scss';
import img1 from './images/klucz1.jpg';
import img2 from './images/klucz2.jpg';
import img3 from './images/klucz3.jpg';

export default class PodKlucz extends Component {

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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings} className="slick">
          <div>
            <img className="imgSlider" src={img1} alt="" />
          </div>
          <div>
            <img className="imgSlider" src={img2} alt="" />
          </div>
          <div>
            <img className="imgSlider" src={img3} alt="" />
          </div>
        </Slider>
        <div className="main-container">
          <div className="slider-text">
            <div className="slider-text__header">
              <h1><strong>Lake</strong> Village</h1>
            </div>
            <div className="slider-text__paragraph">
              <p>Pozwól sobie na wymarzony <br /> Dom nad jeziorem</p>
            </div>
            <a className="slider-button">Dalej</a>
          </div>
        </div>
      </div>
    );
  }
}
