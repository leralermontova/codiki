import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cookies.scss';
import logo from './images/Logoheader.svg';

class Cookies extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-wraper">
          <div className="header-inner">
            <div className="header-nav-wrap">
              <nav className="header-nav">
                <ul className="nav-list">
                  <li className="nav-list__item"><a className="active nav-list__link" href="#"> <span className="none-after">O nas</span></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <span>Opisanie Oferty</span></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <span>Finansowanie</span></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <img src={logo} alt="dom" /></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <span>Localizacja</span></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <span>Oferta</span></a></li>
                  <li className="nav-list__item"><a className="nav-list__link" href=""> <span>KontaKt</span></a></li>
                </ul>
              </nav>
              <div className="menu-icon"><span></span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
