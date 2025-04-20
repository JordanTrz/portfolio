import "./contact.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
// init(process.env.USER_ID);

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_w0ynyci",
        "template_95jw5z4",
        form.current,
        "jCumFtzVBNeh4nubO"
      )
      .then(
        (result) => {},
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="#" />
      </div>
      <div className="right">
        <h2>Contact me!</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Name" />
          <input type="email" name="user_email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks! I'll contact you as soon as posible.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
