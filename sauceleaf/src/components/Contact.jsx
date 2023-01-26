import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const EJS_SERVICE_ID = import.meta.env.VITE_EJS_SERVICE_ID;
    const EJS_TEMPLATE_ID = import.meta.env.VITE_EJS_TEMPLATE_ID;
    const EJS_PUBLIC_KEY = import.meta.env.VITE_EJS_PUBLIC_KEY;

    emailjs
      .sendForm(EJS_SERVICE_ID, EJS_TEMPLATE_ID, form.current, EJS_PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          console.log("MESSAGE SENT");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact--header-text">
        <h2 className="contact--header-text-content">contact</h2>
      </div>
      <div className="contact--header-subtext">
        <p className="contact--header-subtext-content">
          943 Columbus Ave, San Francisco, CA 94133
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact--form-container">
          <input
            className="contact--form-input name"
            placeholder="Name"
            type="text"
            name="user_name"
          />
          <input
            className="contact--form-input email"
            placeholder="Email"
            type="email"
            name="user_email"
          />
          <input
            className="contact--form-input subject"
            placeholder="Subject"
            type="subject"
            name="subject"
          />
          <textarea
            className="contact--form-input message"
            placeholder="Message"
            name="message"
          />
        </div>
        <input className="contact--form-button" type="submit" value="Submit" />
      </form>
    </section>
  );
}
