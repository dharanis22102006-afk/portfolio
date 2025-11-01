import React from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_k6xz1oo", "template_86jeymp", e.target)
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => alert("❌ Failed to send message: " + JSON.stringify(error)));
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Let’s connect! Reach me on LinkedIn or send a message below 👇</p>
      <p>
        💼 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/dharani-s-28490b333" target="_blank" rel="noreferrer">linkedin.com/in/dharani-s</a><br />
        💻 <strong>GitHub:</strong> <a href="https://github.com/dharanis22102006-afk" target="_blank" rel="noreferrer">github.com/dharanis22102006-afk</a>
      </p>

      <form onSubmit={sendEmail}>
        <label>Name:</label>
        <input type="text" name="from_name" placeholder="Your name" required />
        <label>Email:</label>
        <input type="email" name="from_email" placeholder="you@example.com" required />
        <label>Message:</label>
        <textarea name="message" rows="4" placeholder="Your message..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
