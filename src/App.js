import React from "react";
import "./App.css";
import Feature from './containers/Feature';
import Projects from './containers/Projects';
import Syllabus from './containers/Syllabus';
import Pricing from './containers/Pricing';
import Register from './containers/Register';
class App extends React.Component {
  state = {
    currentScreen: 'feature'
  }

  setCurrentScreen = (screenName) => {
    this.setState({
      currentScreen: screenName
    })
  }

  renderCurrentScreen = () => {
    const { currentScreen } = this.state
    switch (currentScreen) {
      case 'feature':
        return <Feature screenChangerFunc={this.setCurrentScreen} />
      case 'projects':
        return <Projects />
      case 'syllabus':
        return <Syllabus />
      case 'pricing':
        return <Pricing />
      case 'register':
        return <Register />
      default:
        return <Feature />
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='header'>
          <div className='header__logo' onClick={() => this.setCurrentScreen('feature')}>Code-EX</div>
          <div className='header__btns'>
            <div className='header__btns__btn' onClick={() => this.setCurrentScreen('projects')}>Projects</div>
            <div className='header__btns__btn' onClick={() => this.setCurrentScreen('syllabus')}>Syllabus</div>
            <div className='header__btns__btn' onClick={() => this.setCurrentScreen('pricing')}>Pricing</div>
            <div className='header__btns__btn' onClick={() => this.setCurrentScreen('register')}>Register</div>
          </div>
        </div>
        {this.renderCurrentScreen()}
      </div>
    );
  }
}
export default App;