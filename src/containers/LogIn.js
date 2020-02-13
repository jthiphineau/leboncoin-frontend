import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const LogIn = props => {
  const history = useHistory();
  return (
    <span>
      <div>
        <button
          onClick={() => {
            Cookies.set("userToken", { expires: 2000 });
            props.setUser({});

            history.push("/");
          }}
        >
          Se connecter
        </button>
      </div>
    </span>
  );
};

export default LogIn;
