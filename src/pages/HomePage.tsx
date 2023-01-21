import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import ContactForm from "./ContactForm";
import LoggedInUser from "../icons/logged-in-user.png";

export interface HomePageProps {}



const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const auth = getAuth();
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;  
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <main
      className={
        darkMode === true ? "homepage-container-dark" : "homepage-container"
      }
    >
      <section className="homepage-left-part">
        <div className="left-part-title-plus-button">
          <h2>Logged-In User</h2>
          <button className="signout-button" onClick={() => signOut(auth)}>
            Sign out
          </button>
        </div>
        <div className="left-part-user-info">
          <img className="logged-in-user" src={LoggedInUser} />
          <p className="logged-in-username">{userName}</p>
          <p className="logged-in-email">{email}</p>
        </div>
      </section>
      <section className="homepage-middle-and-right-part">
        <div className="middle-right-header">
          <header className="header-title">Adress book</header>
        </div>
        <div className="all-contacts">
          <div className="homepage-middle-part">
            <ContactForm />
          </div>
          <div className="homepage-right-part">
            <button onClick={changeTheme} className="dark-mode">{darkMode === false ? "Dark Theme" : "Light Theme"}</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
