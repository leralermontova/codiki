import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './flat.scss';

class Flat extends Component {

  render() {

    const { flat, number, type, hasDiscount, ...rest } = this.props;

    return (
      <div className='flatWrapper'>
        <div className="infoSection">
          <div className="infoRow">
            <div className="title">Numer budynku</div>
            <div className="quant">13</div>
          </div>
          <div className="infoRow">
            <div className="title">Powierzchnia</div>
            <div className="quant">102<span>m2</span></div>
          </div>
          <div className="infoRow">
            <div className="title">Taras</div>
            <div className="quant">15<span>m2</span></div>
          </div>
          <div className="infoRow">
            <div className="title">Garaz</div>
            <div className="quant">10<span>m2</span></div>
          </div>
          <div className="infoRow">
            <div className="title">Ilosc piter</div>
            <div className="quant">2</div>
          </div>
          <div className="infoRow">
            <div className="title">Status</div>
            <div className="status">Wolne</div>
          </div>
        </div>
        <div className="viewSection">
          <div className={`img ${[type]}`} />
          {hasDiscount ?
            <div className="priceBlWithDiscount">
              <div>
                <div className="newPrice">490000 zl</div>
                <div className="byMeterNew">(4800/m2)</div>
              </div>
              <div>
                <div className="oldPrice">
                  <div className="oldPriceQuant">556000 zl</div>
                  <div className="byMeterOld">(7200/m2)</div>
                </div>
              </div>
              <button className="pdf">Pobierz PDF</button>
            </div>
          :
            <div className="priceBlWithDiscount">
              <div className="newPrice">490000 zl</div>
              <div className="byMeterNew">(4800/m2)</div>
              <button className="pdf">Pobierz PDF</button>
            </div>
          }

        </div>
      </div>
    );
  };
  }


Flat.propTypes = {
  flat: PropTypes.object,
  type: PropTypes.number,
  hasDiscount: PropTypes.bool,
};

export default Flat;
