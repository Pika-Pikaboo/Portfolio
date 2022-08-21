import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_7dhhtyt",
        "template_k43w182",
        form.current,
        "ZVwxsbMJHLSOHiB68"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>&lt; Contact Me /&gt;</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>marnhtetzan11@gmail.com</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>James Harry</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>LinkedIn</h4>
            <h5>Harry Junior</h5>
            <a href="mailto:marnhtetzan11@gmail.com">Send me mail</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your comment...."
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
