import React, { useState } from "react";
import "./contact.css";
import Navbar from "../Component/Navbar";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addContact = () => {
    if (!contact) return;

    setContacts([...contacts, contact]);
    setContact("");
  };

  const deleteContact = (index) => {
    setContacts(
      contacts.filter((_, i) => i !== index)
    );
  };

  const editContact = (index) => {
    setContact(contacts[index]);
    setEditIndex(index);
  };

  const updateContact = () => {
    const updated = [...contacts];
    updated[editIndex] = contact;

    setContacts(updated);
    setContact("");
    setEditIndex(null);
  };

 return (
  <div className="contact-page">
    <h1>Personal Contact List</h1>

    <div className="contact-form">
      <input
        type="text"
        placeholder="Enter Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />

      {editIndex === null ? (
        <button onClick={addContact}>
          Add Contact
        </button>
      ) : (
        <button onClick={updateContact}>
          Update Contact
        </button>
      )}
    </div>

    <div className="contact-list">
      {contacts.map((item, index) => (
        <div className="contact-card" key={index}>
          <h3>{item}</h3>

          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => editContact(index)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => deleteContact(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
 );
};

export default Contact;