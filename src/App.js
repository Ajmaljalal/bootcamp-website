import React from "react";
import { AnimateOnChange } from "react-animation";
import "./App.css";
import Feature from "./containers/Feature";
import Projects from "./containers/Projects";
import Syllabus from "./containers/Syllabus";
import Pricing from "./containers/Pricing";
import Register from "./containers/Register";
import More from "./containers/More";
import Footer from './containers/Footer';
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
        {this.renderHeaderNav()}
        <AnimateOnChange animation="fade" className="full-width">
          {this.renderCurrentScreen()}
        </AnimateOnChange>
        {currentScreen === "feature" ? <More /> : null}
        <Footer />
      </div>
    );
  }

  renderHeaderNav = () => {
    const { currentScreen } = this.state;
    return (
      <div className="header">
        <div
          className="header__logo"
          onClick={() => this.setCurrentScreen("feature")}
        >
          codXpert
          </div>
        <div className="header__btns">
          <div
            className="header__btns__btn"
            onClick={() => this.setCurrentScreen("projects")}
            style={{
              color:
                currentScreen === "projects"
                  ? "#6D6AFE"
                  : "black",
            }}
          >
            Projects
            </div>
          <div
            className="header__btns__btn"
            onClick={() => this.setCurrentScreen("syllabus")}
            style={{
              color:
                currentScreen === "syllabus"
                  ? "#6D6AFE"
                  : "black",
            }}
          >
            Syllabus
            </div>
          <div
            className="header__btns__btn"
            onClick={() => this.setCurrentScreen("pricing")}
            style={{
              color:
                currentScreen === "pricing"
                  ? "#6D6AFE"
                  : "black",
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
    )
  }
}
export default App;
