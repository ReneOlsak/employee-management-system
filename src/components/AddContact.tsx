import React from "react";
import { IndexRouteObject } from "react-router-dom";
import { IUserData } from "../pages/ContactForm";

interface ContactProps {
  data: IUserData;
  deleteContact(contactToDelete: string): void;
}
const AddContact = ({ data, deleteContact }: ContactProps) => {
  return (
    <section className="added-contact" >
      <div>{data.name}</div>
      <div>{data.job}</div>
      <div>{data.number}</div>
      <div>{data.email}</div>
      <button onClick={() => {deleteContact(data.name)}}>x</button>
    </section>
  );
};

export default AddContact;
