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
  const [editing, setEditing] = useState<number>(-1);

  const handleEdit = (index: number) => {
    setEditing(index);
    setName(contact[index].name);
    setJob(contact[index].job);
    setNumber(contact[index].number);
    setEmail(contact[index].email);
    setVisible(true);
  };

  const clearForm = () => {
    setName("");
    setJob("");
    setNumber("");
    setEmail("");
  };

  const changeVisibility = () => {
    setVisible(true);
  };

  const changeToInvisible = () => {
    setVisible(false);
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
    if (editing !== -1) {
      const updatedContact = {
        name: name,
        job: job,
        number: number,
        email: email,
      };
      setContact(contact.map((c, i) => (i === editing ? updatedContact : c)));
      setEditing(-1);
      changeToInvisible();
      clearForm();
    } else {
      const newContact = { name: name, job: job, number: number, email: email };
      setContact([...contact, newContact]);
      changeToInvisible();
      clearForm();
    }
  };

  const handleRemove = (index: any) => {
    setEditing(-1);
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
            visible === false
              ? "contact-form-invisible"
              : "contact-form-container"
          }
        >
          <div>ContactForm</div>
          <button className="change-to-invisible" onClick={changeToInvisible}>
            X
          </button>
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="name"
            placeholder="name"
            value={name}
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="job"
            placeholder="job"
            value={job}
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="text"
            name="number"
            placeholder="phone number"
            value={number}
          />
          <input
            onChange={handleChange}
            className="contact-input"
            type="email"
            name="email"
            placeholder="email"
            value={email}
          />
          <button onClick={addContact}>{editing !== -1 ? 'Update' : 'Submit'}</button>
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
              <button onClick={() => handleEdit(key)}>Edit</button>
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
