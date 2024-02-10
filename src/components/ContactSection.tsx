import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Resume icon
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // LinkedIn and GitHub icons
import resumePdf from '../assets/Resume/Resume.pdf';

function ContactSection() {
  const iconColor = "#3CCF91";

  const formspreeEndpoint = "https://formspree.io/f/xleqjyyw";

  return (
    <div className="contact-container">
      <h1>Contact me!</h1>
      <p> Leave me a message here and I will try to get back to you as soon as possible.</p>
        <form className="contact-form" action={formspreeEndpoint} method="POST">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="_replyto" placeholder="Email" required />
          <textarea id="message" name="message" placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
      </form>
      <div className="social-links1">
            <a
              href={resumePdf}
              download="AneesShaikResume.pdf"
              title="Resume"
            >
              <FontAwesomeIcon icon={faFileAlt} color={iconColor} className="social-icon1" />
            </a>
            <a
              href="https://www.linkedin.com/in/anees-shaik-327267210/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} color={iconColor} className="social-icon1" />
            </a>
            <a
              href="https://github.com/anees1203"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} color={iconColor} className="social-icon1" />
            </a>
          </div>
      <div className="contact-footer">
        © Copyright 2024. Made by Anees Shaik
      </div>
    </div>
  );
}

export default ContactSection;
