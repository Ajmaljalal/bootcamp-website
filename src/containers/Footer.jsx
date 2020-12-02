import React from 'react'

export default function Footer() {
  return (
    <div className="footer-w">
      <div className="footer__main__content">
        <div className="footer__logo__section">
          <div
            className="footer__logo"
            onClick={() => this.setCurrentScreen("feature")}
          >
            CodeExpert
              </div>
          <p className="footer__bio">
            Our Web Development programs are designed to prepare students
            for real work environments and make them skilled workforce with
            many capabilities. We achieve this by having one of the
            strongest curriculums and senior developer instructors.
              </p>
        </div>
        <div className="footer__quick__links__section">
          <h3 className="footer__title">Direct Access</h3>
          <ul className="links__container">
            <li
              className="links"
              style={{ paddingTop: "0", width: "43px" }}
            >
              Home
                </li>
            <li className="links" style={{ width: "65px" }}>
              About Us
                </li>
            <li className="links" style={{ width: "75px" }}>
              Contact Us
                </li>
            <li className="links" style={{ width: "100px" }}>
              Login to Class
                </li>
            <li className="links" style={{ width: "135px" }}>
              Terms & Conditions
                </li>
          </ul>
        </div>
        <div className="footer__contact__us">
          <h3 className="footer__title">Contacts</h3>
          <ul className="links__container">
            <li
              className="links"
              style={{ paddingTop: "0", width: "45px" }}
            >
              Phone
                </li>
            <li className="links" style={{ width: "65px" }}>
              About Us
                </li>
            <li className="links" style={{ width: "125px" }}>
              +1 (234) 567-8910
                </li>
            <li className="links" style={{ width: "45px" }}>
              Email
                </li>
            <li className="links" style={{ width: "110px" }}>
              info@codex.com
                </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright__section">
        <p>
          2020 Copy Rights. All Rights Reserved by
              <span
            onClick={() => this.setCurrentScreen("feature")}
            className="footer__copyright__title"
          >
            Light Moon LLC/CodeExpert
              </span>
        </p>
      </div>
    </div>
  )
}
