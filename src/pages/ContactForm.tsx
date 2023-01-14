import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IUserData {
  name: string;
  job: string;
  number: string;
  email: string;
}

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<IUserData[]>([]);
  const [visible, setVisible] = useState<boolean>(false);

  const changeVisibility = () => {
    setVisible((prev) => !prev);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "job") {
      setJob(event.target.value);
    } else if (event.target.name === "number") {
      setNumber(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    }
  };

  const addContact = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const newContact = { name: name, job: job, number: number, email: email };
    setContact([...contact, newContact]);
  };

  const handleRemove = (index: any) => {
    setContact(
      contact.filter((_, i) => {
        return i !== index;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="change-visibility-button" onClick={changeVisibility}>
        Add contact
      </button>
      <div className="contact-form-absolute">
        <div
          className={
            visible ? "contact-form-invisible" : "contact-form-container"
          }
        >
          <div>ContactForm</div>
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="job"
            placeholder="job"
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="number"
            placeholder="phone number"
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="email"
            name="email"
            placeholder="email"
          />
          <button onClick={addContact}>Submit</button>
        </div>
      </div>

      <div>
        {contact.map((name: IUserData, key: number) => {
          return (
            <div key={key} className="added-contact">
              <div>{name.name}</div>
              <div>{name.job}</div>
              <div>{name.number}</div>
              <div>{name.email}</div>
              <button
                onClick={() => {
                  handleRemove(key);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default ContactForm;
