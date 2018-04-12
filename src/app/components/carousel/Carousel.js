import React, { Component} from "react";
import Slider from "react-slick";
import './Carousel.scss';
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
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
		fade: true,
		cssEase: 'linear',
      autoplaySpeed: 4000,
		pauseOnHover: false,
		pauseOnFocus: false,
	  arrows: false
    };
    return (
		<div className="main-container">
			<Slider ref={slider => (this.slider = slider)} {...settings} className="slick">
				<div className='imgSlider'>
				</div>
				<div className='imgSlider1'>
				</div>
				<div className='imgSlider2'>
				</div>
				<div className='imgSlider3'>
				</div>
			</Slider>
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
			<a className="slider-button">Dalej</a>
		</div>
    );
  }
}
