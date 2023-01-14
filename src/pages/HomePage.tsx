import React, { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const auth = getAuth();
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const navigate = useNavigate();
 

  return (
    <main className="homepage-container">
      <section className="homepage-left-part">
        <p>{userName}</p>
        <p>{email}</p>
        <button className="signout-button" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </section>
      <section className="homepage-middle-and-right-part">
        <div className="middle-right-header">
          <header className="header-title">Adress book</header>
        </div>
        <div className="all-contacts">
          <div className="homepage-middle-part">
            <ContactForm />
          </div>
          <div className="homepage-right-part">Create contact</div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
