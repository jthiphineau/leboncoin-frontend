import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const LogIn = props => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <span>
      <div>
        <form
          onSubmit={async event => {
            event.preventDefault();

            try {
              const response = await axios.post(
                "https://leboncoin-api.herokuapp.com/api/user/log_in",
                {
                  email,
                  password
                }
              );

              if (response.data.token) {
                const token = response.data.token;

                Cookies.set("userToken", token, { expires: 2000 });

                props.setUser({
                  token: token
                });

                history.push("/");
              } else {
                alert("Token is missing");
              }
            } catch (error) {
              alert("Identifiants incorrects");
            }
          }}
        >
          <span>Adresse email</span>
          <input
            type="email"
            value={email}
            onChange={event => {
              const value = event.target.value;
              setEmail(value);
            }}
          />
          <span>password</span>
          <input
            type="password"
            value={password}
            onChange={event => {
              const value = event.target.value;
              setPassword(value);
            }}
          />

          <button type="submit">Se connecter</button>
        </form>

        <Link to="/sign_up">S'inscrire</Link>
      </div>
    </span>
  );
};

export default LogIn;
