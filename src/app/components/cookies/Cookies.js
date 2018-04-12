import React, { Component } from 'react';
import './Cookies.scss';

class Cookies extends Component {

  state = {
    isOpen: true,
  };

  close = () => this.setState({ isOpen: false });

  render () {
    return (
      <div className={"cookies-bar " +(!this.state.isOpen && ' close')}>
        <div className="cookies-bar-inner">
          <div className="cookies-bar-inner__text">
            <p>Nasza strona internetowa używa plików cookies (tzw. ciasteczka) w celach statystycznych, reklamowych oraz funkcjonalnych.
            Dzięki nim możemy indywidualnie dostosować stronę do twoich potrzeb. Każdy może zaakceptować pliki cookies albo ma możliwość wyłączenia ich w przeglądarce, dzięki czemu nie będą zbierane żadne informacje. </p>
          </div>
          <div className="cookies-bar-inner__btn">
            <button onClick={this.close}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cookies;
