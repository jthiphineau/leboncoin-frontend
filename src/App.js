import React from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import logo from "./assets/Vector.svg";

function App() {
  return (
    <div>
      <div className="header">
        <img className="logo" src={logo} alt="logo-leboncoin" />
        <button className="publish">Déposer une annonce</button>
        <button className="search">Rechercher</button>
        <button className="logIn">Se connecter</button>
      </div>
      <div className="body">
        <Router>
          <Switch>
            <Route path="/offer/:id">
              <Offer />
            </Route>
            <Route path="/">
              <Offers />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
