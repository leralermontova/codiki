import React, { Component } from 'react';
import './Localizacja.scss';
import map from './images/map.png';

class Local extends Component {
  render() {
    return (
      <div className="local">
        <div className="titleBlock">
          <div className="mainText">
              <h1>Localizacja</h1>
          </div>
          <div className="secondaryText">
            Cicha i bezpieczna okolica sprawa, ze mne mneszqma oraz domy przeznaczone na sprzedaz<br/>
            na Mazowszu nie sa w stanie konkurować z tą localizacja. <br/>
          </div>
        </div>
        <div className="mapBlock">
          <img alt="" src={map} className="mapImage"/>
        </div>
      </div>
    );
  }
}

export default Local;
