import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1033f0d2-5d9c-4033-a648-d9a952d727e2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div  id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm Tiru, a passionate developer focused on AI, smart systems, and
            automation. Feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>tiruvikramanvelusamy@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              +91 6382792828
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              Tamilnadu,India.
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" name="name"></input>
            <label>Your Email</label>
            <input type="email" placeholder="Enter your email" name="email"></input>
            <label>Write Your Message here!</label>
            <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
            <button className="contact-submit" type="submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
