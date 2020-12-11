import React from "react";
import { AnimateOnChange } from "react-animation";
import "./App.css";
import Button from './containers/helpers/Button';
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
      case "curriculum":
        return <Syllabus />;
      case "pricing":
        return <Pricing />;
      case "register":
        return <Register />;
      default:
        return <Feature screenChangerFunc={this.setCurrentScreen} />;
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
        {currentScreen === "feature" ? <More onScreenChange={this.setCurrentScreen} /> : null}
        <Footer currentScreen={this.state.currentScreen} setCurrentScreen={this.setCurrentScreen} />
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
          <Button currentScreen={currentScreen} screenName='projects' onClick={this.setCurrentScreen} />
          <Button currentScreen={currentScreen} screenName='curriculum' onClick={this.setCurrentScreen} />
          <Button currentScreen={currentScreen} screenName='pricing' onClick={this.setCurrentScreen} />
          <Button currentScreen={currentScreen} screenName='register' onClick={this.setCurrentScreen} bgRequired={true} />
        </div>
      </div>
    )
  }
}
export default App;
