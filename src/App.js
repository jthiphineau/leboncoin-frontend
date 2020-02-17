import React, { useState } from "react";
import "./reset.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import logo from "./assets/Vector.svg";
import Cookies from "js-cookie";
import SignUp from "./containers/SignUp";
import LogIn from "./containers/LogIn";
import Publish from "./containers/Publish";

function App() {
  const tokenFromCookie = Cookies.get("userToken");

  let newState;
  if (tokenFromCookie) {
    newState = { token: tokenFromCookie };
  } else {
    newState = null;
  }

  const [user, setUser] = useState(newState);

  return (
    <Router>
      {user === null ? <Redirect to="/" /> : null}
      <header>
        <img className="logo" src={logo} alt="logo-leboncoin" />
        <Link to="/Publish">
          <button className="publish">Déposer une annonce</button>
        </Link>
        <button className="search">Rechercher</button>
        {user === null ? (
          <Link to="/log_in">
            <button>Se connecter</button>
          </Link>
        ) : (
          <button
            onClick={() => {
              Cookies.remove("userToken");
              setUser(null);
            }}
          >
            Se déconnecter
          </button>
        )}
      </header>
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route path="/sign_up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/log_in">
          <LogIn setUser={setUser} />
        </Route>
        <Route path="/">
          <Offers />
        </Route>
      </Switch>
      <footer>THE END</footer>
    </Router>
  );
}

export default App;
