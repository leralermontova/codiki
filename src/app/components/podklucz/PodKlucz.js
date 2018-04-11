import React, { Component} from "react";
import Slider from "react-slick";
import './PodKlucz.scss';
import img1 from './images/klucz1.jpg';
import img2 from './images/klucz2.jpg';
import img3 from './images/klucz3.jpg';
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
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
          <div className="mainText">POD KLUCZ</div>
          <div className="secondaryText">
            Oferujemy możliwość wykończenia<br/>
            zakupionych przez Państwa <br/>
            lokali pod klucz.
          </div>
        </div>
        <div className="horizontal">
          <div className="mainContainer">
            <div className="title">SPRAWDZENI FACHOWCY</div>
            <div className="subtitle">GWARANTUJĄ SOLIDNIE <br/>TERMINDWO WYKONANE PRACE</div>
            <div className="infoText">
              <div className="secondaryText">
                <span>Wiemy, że bywają sytuacje kiedy mają</span>
                <span>Państwo mało czasu na wprowadzenie</span>
                <span>się do nowego mieszkania — to również</span>
                <span>nie stanowi dla nas problemu.</span>
                <span>Decydując się na wykończenie</span>
                <span>z nami wnętrza:</span>
                <span>• oszczędzają Państwo czas</span>
                <span>• współpracują Państwo ze specjalistami</span>
                <span>• mogą Państwo liczyć na porady</span>
              </div>
            </div>
          </div>
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

        </div>
      </div>
    );
  }
}
