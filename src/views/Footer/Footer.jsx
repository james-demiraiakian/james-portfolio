import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="socials-list">
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/james-demiraiakian/"
        >
          <img
            className="footer-logo"
            src={`${process.env.PUBLIC_URL}/images/linkedin.png`}
            alt="linkedin logo"
          />
          LinkedIn
        </a>

        <a className="footer-link" href="https://github.com/james-demiraiakian">
          <img
            className="footer-logo"
            src={`${process.env.PUBLIC_URL}/images/github.png`}
            alt="github logo"
          />
          GitHub
        </a>
      </div>
    </div>
  );
}
