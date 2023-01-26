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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Subject</label>
      <input type="subject" name="subject" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Submit" />
    </form>
  );
}
