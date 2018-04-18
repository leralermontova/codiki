import React, { Component } from 'react';
import Flat from './components/Flat';
import './oferta.scss';

class Oferta extends Component {
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
        <div className="flats">
          <div className="types">
            <div>typ 1</div>
            <div>typ 2</div>
          </div>
        </div>
        <div className="flatList">
          <div>
            <Flat type="typ1" hasDiscount/>
            <Flat type="typ2"/>
          </div>
          <div>
            <Flat type="typ2"/>
            <Flat type="typ2"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Oferta;
