import React, { Component} from "react";
import Slider from "react-slick";
import './PodKlucz.scss';
import img1 from './images/Pod.jpg';
import img2 from './images/Pod1.jpg';
import img3 from './images/Pod3.jpg';
import radio from './images/radio.png';

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
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 5000,
      dots: true,
      appendDots: dots => (
        <div
          style={{
            bottom: "20px"
          }}
        >
          <ul style={{ margin: "0px" }}>
            {dots}
           </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "50px"
          }}
        >
          <img src={radio} alt="" className="radio" />
        </div>
      )
    };
    return (
      <div className="podKlucz">
        <div className="titleBlock">
          <div className="mainText">
              <h1>POD KLUCZ</h1>
          </div>
          <div className="secondaryText">
            Oferujemy możliwość wykończenia<br/>
            zakupionych przez Państwa <br/>
            lokali pod klucz.
          </div>
        </div>
        <div className="horizontal">
          <Slider ref={slider => (this.slider = slider)} {...settings} className="slickSlider">
            <div>
              <img className="imgKlucz" src={img1} alt="" />
            </div>
            <div>
              <img className="imgKlucz" src={img2} alt="" />
            </div>
            <div>
              <img className="imgKlucz" src={img3} alt="" />
            </div>
          </Slider>
          <div className="mainContainer">
            <div className="title"><strong>SPRAWDZENI FACHOWCY</strong></div>
            <div className="subtitle">GWARANTUJĄ SOLIDNIE <br/>TERMINDWO WYKONANE PRACE</div>
              <div className="text-block">
                <p>Wiemy, że bywają sytuacje kiedy mają
					Państwo mało czasu na wprowadzenie
					się do nowego mieszkania – to również
					nie stanowi dla nas problemu.</p>
                <p>Decydując się na wykończenie
					z nami wnętrza:Decydując się na wykończenie
					z nami wnętrza:</p>
                <ul>
					<li>oszczędzają Państwo czas</li>
					<li>współpracują Państwo ze specjalistami</li>
					<li>mogą Państwo liczyć na porady</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
