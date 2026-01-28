import React, { useState } from "react";
import RouterHeader from "../components/RouterHeader";
import SectionWithImage from "../components/section/SectionWithImage";

import "../styles/contact.css";

const Contact = () => {
  const routeName = "Contact";
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message Sent: ${message}`);
      setMessage("");
    }
  };
  return (
    <>
      <RouterHeader path={routeName} />
      <div className="con_tainer">
        <img
          src="/img/contact.svg"
          alt="contact Icon"
          className="contactImage"
        />
        <h1 className="contactHeader">Contact</h1>
        <p className="contactDescription">
          Please reach out to us if you have any questions or you need our
          assistance with something.
        </p>
      </div>

      <div className="inputGroup">
        <div className="labeledInput">
          <label htmlFor="Subject" className="label">
            Subject
          </label>
          <div className="inputContainer">
            <div className="black-con">
              <img src="img/idea.svg" alt="idea_image" />
            </div>
            <input
              type="text"
              placeholder="Regarding Posting a Job"
              className="inputField"
            />
          </div>
        </div>
        <div className="labeledInput">
          <label htmlFor="email" className="label">
            Your email
          </label>
          <div className="inputContainer">
            <div className="black-con">
              <img
                src="img/email.svg"
                alt="email_image"
                className="ideaImage"
              />
            </div>
            <input
              type="email"
              placeholder="abebe@gmail.com"
              className="inputField"
            />
          </div>
        </div>
      </div>
      <div className="message-container">
        <div className="labeledInput">
          <label htmlFor="email" className="label">
            Message
          </label>
          <textarea
            className="message-box"
            placeholder="Write your message down..."
            maxLength={512}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send message
          </button>
        </div>
      </div>
      <SectionWithImage />
    </>
  );
};

export default Contact;
