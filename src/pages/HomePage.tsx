import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = (props) => {
  const auth = getAuth();
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const navigate = useNavigate();

  const addContactList = () => {
    navigate("/contact-form");
  };

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
          <button onClick={addContactList} className="add-contact-button">
            Add contact
          </button>
        </div>
        <div className="all-contacts">
          <div className="homepage-middle-part">
            <ContactForm />
          </div>
          <div className="homepage-right-part">One Contact</div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
