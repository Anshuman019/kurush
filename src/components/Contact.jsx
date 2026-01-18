import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Get in Touch</h2>
      <p>
        We would love to connect with you. Follow our journey or reach out to us
        directly.
      </p>

      <div className="contact-icons">
        <a href="https://www.instagram.com/kurush.home/" target="_blank" rel="noreferrer">
          <FaInstagram /> Instagram
        </a>

        <a href="mailto:kurush.em@gmail.com">
          <FaEnvelope /> kurush.em@gmail.com
        </a>

        <a href="tel:+91 6363 321 115">
          <FaPhone /> +91 6363 321 115
        </a>
      </div>
    </section>
  );
}
