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
      <button onClick={() => signInWithGoogle()} disabled={authentication} className="ghost-round full-width">Sign in with Google</button>
    </div>
  );
};

export default Login;
