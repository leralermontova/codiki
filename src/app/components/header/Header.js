import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
//import { Link } from 'react-router-dom';
import './Header.scss';
import logo from './images/Logoheader.svg';

class Cookies extends Component {

    state = {
      isOpen: false,
    };

  toggleMenu = () => this.setState({ isOpen: !this.state.isOpen });


  render() {
    return (
      <div className="header">
        <div className="mobile-logo"><img src={logo} alt="dom" /></div>
        <MediaQuery minDeviceWidth={1024}>
          <div className="header-wraper">
            <div className="header-inner">
              <div className="header-nav-wrap">
                <nav className="header-nav">
                  <ul className="nav-list">
                    <li className="nav-list__item"><a className="active nav-list__link"> <span className="none-after">O nas</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Opisanie Oferty</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Finansowanie</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <img src={logo} alt="dom" /></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Localizacja</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Oferta</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>KontaKt</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023}>
          <div className={"header-wraper " +(this.state.isOpen ? ' open' : 'close')} onClick={this.toggleMenu}>
            <div className="header-inner">
              <div className="header-nav-wrap">
                <nav className="header-nav">
                  <ul className="nav-list">
                    <li className="nav-list__item"><a className="active nav-list__link"> <span className="none-after">O nas</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Opisanie Oferty</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Finansowanie</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <img src={logo} alt="dom" /></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Localizacja</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>Oferta</span></a></li>
                    <li className="nav-list__item"><a className="nav-list__link"> <span>KontaKt</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div
            className = {"menu-icon " +(this.state.isOpen ? ' open' : 'close')}
            onClick={this.toggleMenu}>
              <span></span>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Cookies;
