import "./contact.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const serviceId = process.env.REACT_APP_JMAIL_JS_SERVICE_ID;
const templateId = process.env.REACT_APP_JMAIL_JS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_JSMAIL_JS_PUBLIC_KEY;

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(true);
    setIsSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
    } catch (error) {
      console.error(error.text);
    } finally {
      setIsSending(false);
    }
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
          <button
            type="submit"
            disabled={isSending}
            className={isSending ? "disabled" : ""}
          >
            Send
          </button>
          {message && <span>Thanks! I'll contact you as soon as posible.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
