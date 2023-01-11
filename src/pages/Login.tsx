import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface LoginProps {}

const Login: React.FunctionComponent<LoginProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);

  const signInWithGoogle = async () => {
    setAuthentication(true);

    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        console.log(response.user.uid);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthentication(false);
      });
  };

  return (
    <div>
      <div className="bold-line"></div>
      <div className="container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Hello There!</div>
            <div className="subtitle">
              We're almost done. Before using our services you need to create an
              account.
            </div>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Username"
                className="input-line full-width"
              ></input>
              <input
                type="email"
                placeholder="Email"
                className="input-line full-width"
              ></input>
              <input
                type="password"
                placeholder="Password"
                className="input-line full-width"
              ></input>
            </div>
            <div className="spacing">
              or continue with <span className="highlight">Facebook</span>
            </div>
            <div>
              <button onClick={() => signInWithGoogle()} disabled={authentication} className="ghost-round full-width">Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
