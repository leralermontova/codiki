import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Header from "../app/components/header/Header";
import PodKlucz from "../app/components/podklucz/PodKlucz";
// import Cookies from "../app/components/cookies/Cookies";
import routes from './routes';
import './App.scss';

const App = () => (
  <div className="app">
    <Switch>
      {routes.map((route, i) => <Route key={i} {...route} />)}
    </Switch>
    <Header />
    <PodKlucz />
  </div>
);

export default App;
