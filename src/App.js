import React from "react";
import { AnimateOnChange } from "react-animation";
import "./App.css";
import Feature from "./containers/Feature";
import Projects from "./containers/Projects";
import Syllabus from "./containers/Syllabus";
import Pricing from "./containers/Pricing";
import Register from "./containers/Register";
import More from "./containers/More";
class App extends React.Component {
  state = {
    currentScreen: "feature",
  };

  setCurrentScreen = (screenName) => {
    if (this.state.currentScreen === screenName) {
      return;
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    this.setState({
      currentScreen: screenName,
    });
  };

  renderCurrentScreen = () => {
    const { currentScreen } = this.state;
    switch (currentScreen) {
      case "feature":
        return <Feature screenChangerFunc={this.setCurrentScreen} />;
      case "projects":
        return <Projects />;
      case "syllabus":
        return <Syllabus />;
      case "pricing":
        return <Pricing />;
      case "register":
        return <Register />;
      default:
        return <Feature />;
    }
  };
  render() {
    const { currentScreen } = this.state;
    return (
      <div className="container">
        <div className="header">
          <div
            className="header__logo"
            onClick={() => this.setCurrentScreen("feature")}
          >
            CodeExpert
          </div>
          <div className="header__btns">
            <div
              className="header__btns__btn"
              onClick={() => this.setCurrentScreen("projects")}
              style={{
                border:
                  currentScreen === "projects"
                    ? "1px solid rgb(210, 226, 245)"
                    : "1px solid transparent",
              }}
            >
              Projects
            </div>
            <div
              className="header__btns__btn"
              onClick={() => this.setCurrentScreen("syllabus")}
              style={{
                border:
                  currentScreen === "syllabus"
                    ? "1px solid rgb(210, 226, 245)"
                    : "1px solid transparent",
              }}
            >
              Syllabus
            </div>
            <div
              className="header__btns__btn"
              onClick={() => this.setCurrentScreen("pricing")}
              style={{
                border:
                  currentScreen === "pricing"
                    ? "1px solid rgb(210, 226, 245)"
                    : "1px solid transparent",
              }}
            >
              Pricing
            </div>
            <div
              className="header__btns__btn header__btns__btn--bg"
              onClick={() => this.setCurrentScreen("register")}
            >
              Register
            </div>
          </div>
        </div>
        <AnimateOnChange animation="fade" className="full-width">
          {this.renderCurrentScreen()}
        </AnimateOnChange>
        {this.state.currentScreen === "feature" ? <More /> : null}
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
                CodeExpert
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
