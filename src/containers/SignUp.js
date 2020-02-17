import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const SignUp = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();
  return (
    <form
      onSubmit={async event => {
        event.preventDefault();

        const result = username.match(/^[a-z0-9_-]{3,15}$/);
        if (result === null) {
          alert("le username n'est pas valide");
          return;
        }

        if (password1 === password2) {
          try {
            const response = await axios.post(
              "https://leboncoin-api.herokuapp.com/api/user/sign_up",
              {
                email,
                username,
                password: password1
              }
            );

            console.log(response.data);

            if (response.data.token) {
              const token = response.data.token;
              Cookies.set("userToken", token, { expires: 2000 });
              setUser({
                token: token
              });
              history.push("/");
            }
          } catch (error) {
            alert("An error occurred");
            console.log("error.message = ", error);
          }
        }
      }}
    >
      <span>Pseudo*</span>
      <input
        type="text"
        value={username}
        onChange={event => {
          setUsername(event.target.value);
        }}
      />
      <span>Adresse email*</span>
      <input
        type="email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
      />
      <span>Mot de passe*</span>
      <input
        type="password"
        value={password1}
        onChange={event => {
          setPassword1(event.target.value);
        }}
      />
      <span>Confirmer le mot de passe*</span>
      <input
        type="password"
        value={password2}
        onChange={event => {
          setPassword2(event.target.value);
        }}
      />
      <input type="submit" value="Créer mon Compte Personnel" />
    </form>
  );
};

export default SignUp;
