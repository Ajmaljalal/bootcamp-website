import React from 'react'

export default function Footer() {
  return (
    <div className="footer-w">
      <div className="footer__main__content">
        <div className="footer__logo__section">
          <div className="footer__logo">CodeExpert</div>
          <p className="footer__bio">
            Our Web Development programs are designed to prepare students
            for real work environments and make them skilled workforce with
            many capabilities. We achieve this by having one of the
            strongest curriculums and senior developer instructors.
          </p>
        </div>
        <div className="footer__quick__links__section">
          <div className="footer__title">Quick Links</div>
          <ul className="links__container">
            <li className="links">Home</li>
            <li className="links">About Us</li>
            <li className="links">Contact Us</li>
            <li className="links">Login to Class</li>
            <li className="links">Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer__contact__us">
          <div className="footer__title">Contacts</div>
          <ul className="links__container">
            <li className="links">Phone</li>
            <li className="links" >About Us</li>
            <li className="links">+1 (234) 567-8910</li>
            <li className="links">Email:  info@codex.com</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright__section">
        <p>
          2020 Copy Rights. All Rights Reserved by
          <span className="footer__copyright__title">Light Moon LLC/CodeExpert</span>
        </p>
      </div>
    </div>
  )
}
