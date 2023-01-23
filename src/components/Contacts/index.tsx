import React, { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";
import "./style.scss";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields ");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_c2asqoj",
        "template_ab3pwni",
        templateParams,
        "3GV8NT1dvAjixnjJX"
      )
      .then(
        (res) => {
          console.log(res.status);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="boxOfContacts"  data-animeL>
      <h2 className="titleOfSection">Contacts</h2>
      <div className="container">
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Enter your message..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="buttonSendEmail" type="submit" value="Send" />
        </form>
      </div>
      <br />
      <a href="https://wa.me/5516988652219" target="_blank">
        <img src="/icons/wpp.svg" className="iconF" />
      </a>
      <a
        href="https://www.linkedin.com/in/mateus-ranzani-89744421b/"
        target="_blank"
      >
        <img src="/icons/linkedin.svg" className="iconF" />
      </a>
    </div>
  );
}

export default Contacts;
