import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FunctionComponent = () => {
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
    <div className="login-container">
      <div className="login-title">Adress Book</div>
      <button onClick={() => signInWithGoogle()} disabled={authentication} className="ghost-round full-width">Login with <span className="google-g1">G</span>
      <span className="google-o1">o</span>
      <span className="google-o2">o</span>
      <span className="google-g2">g</span>
      <span className="google-l">l</span>
      <span className="google-e">e</span>
      </button>
    </div>
  );
};

export default Login;
