import React from "react";

const Signup = () => {
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
              <button className="ghost-round full-width">Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
