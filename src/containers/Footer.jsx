import React from 'react'

export default function Footer({ currentScreen, setCurrentScreen }) {
  return (
    <div className="footer-w">
      <div className="footer__main__content">
        <div className="footer__logo__section">
          <div className="footer__logo" onClick={() => setCurrentScreen('feature')}>CODXPERT</div>
          <p className="footer__bio">
            Our Web Development program is designed to prepare students
            for real work environments and make them skilled engineers with
            many capabilities. We achieve this by having one of the
            strongest curriculums and expert instructors.
          </p>
        </div>
        <div className="footer__quick__links__section">
          <div className="footer__title">Quick Links</div>
          <ul className="links__container">
            <li className="links" onClick={() => setCurrentScreen('feature')}>Home</li>
            <li className="links" onClick={() => setCurrentScreen('register')}>Register</li>
            <li className="links" onClick={() => setCurrentScreen('projects')}>Projects</li>
            <li className="links" onClick={() => setCurrentScreen('pricing')}>Pricing</li>
            <li className="links" onClick={() => setCurrentScreen('curriculum')}>Curriculum</li>
            <li className="links" onClick={() => setCurrentScreen('feature')}>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer__contact__us">
          <div className="footer__title">Contacts</div>
          <ul className="links__container">
            <li className="links">+1 (916) 345-6008</li>
            <li className="links">info@codxpert.com</li>
            <li className="links">4109 Sally Ride Way, <br />Sacramento CA 95834</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright__section">
        <p>
          2020 Copy Rights. All Rights Reserved by
          <span className="footer__copyright__title">Light Moon LLC</span>
        </p>
      </div>
    </div>
  )
}
