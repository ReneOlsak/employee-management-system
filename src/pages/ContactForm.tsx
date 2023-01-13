import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddContact from "../components/AddContact";

export interface IUserData {
  name: string;
  job: string;
  number: string;
  email: string;
}

const ContactForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<IUserData[]>([]);

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
    console.log(contact);
  };

  const deleteContact = (contactToDelete: string): void => {
    setContact(
      contact.filter((contact) => {
        return contact.name !== contactToDelete;
      })
    );
  };

  return (
    <form className="contact-form-container">
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
      <select name="gender" id="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={addContact}>Submit</button>
      <div>
        {contact.map((name: IUserData, key: number) => {
          return (
            <AddContact deleteContact={deleteContact} data={name} key={key} />
          );
        })}
      </div>
    </form>
  );
};

export default ContactForm;