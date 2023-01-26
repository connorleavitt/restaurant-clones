import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import headerDecorator from "../assets/img/header_decorator_orange.png";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const SECRET = process.env.REACT_APP_SECRET;

  return (
    <form ref={form} onSubmit={sendEmail}>
      {console.log(SECRET)}
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
