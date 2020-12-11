import React, { Component, Fragment } from 'react'
import DesignSpots from './helpers/designSpots';
import pinkEllipse from '../assets/ellipse-pink.svg'
import redDot from '../assets/dot-red.svg'
import cyanEllips from '../assets/ellipse-cyan.svg'
import whyCodeExperImage from '../assets/why.svg'
import technologiesIcon from '../assets/technologies.svg'
import toolsIcon from '../assets/tools.svg'
import titlesIcon from '../assets/titles.svg'
import Button from './helpers/Button';

export default class More extends Component {
  render() {
    return (
      <Fragment>
        {this.renderWhat()}
        {this.renderWhy()}
        {this.renderInfoCards()}
      </Fragment>
    )
  }

  renderWhat = () => {
    return (
      <div id='#more' className='info__what'>
        <div className='what__title'>
          <h2>What is CodeExpert?</h2>
        </div>
        <div className='what__desc'>
          CodeExpert is a 6 months of projects building bootcamp that, unlike other bootcamps, focuses more on the implementation of skills in real world projects. We built our curriculum based on the experience of experts and the needs in the field. CodeExpert teaches the most essential skills and progarming languages to help students make real world web apps from scratch with minimun to no supervision.
          </div>
        {DesignSpots(pinkEllipse, 80, 50)}
        {DesignSpots(redDot, 50, 90)}
        {DesignSpots(cyanEllips, 20, 40)}
      </div>
    )
  }

  renderWhy = () => {
    const { onScreenChange } = this.props
    return (
      <div className='info__why'>
        <img src={whyCodeExperImage} alt='whycodeexperticon' />
        <div className='why__desc'>
          <h2>Why CodeExpert?</h2>
          <p>Our program is carefully designed to respond to the dynamic needs of the web development job market. At the end of the training, you will have gained the necessary skills to enter the market and secure a job.</p>
          <ul>
            <li>Experienced and Professional Instructors on hand</li>
            <li>Student Support</li>
            <li>Real World Front End, Back End and Full Stack Projects</li>
            <li>Up to Date Training Materials</li>
            <li>Resume and Job Interview Preparation</li>
          </ul>
          <Button currentScreen={'feature'} screenName='register' onClick={() => onScreenChange('register')} bgRequired={true} />
        </div>
      </div>
    )
  }

  renderInfoCards = () => {
    const { onScreenChange } = this.props
    return (
      <div className='info__cards-w'>
        <h2>There are tons of skills and opportunities with CodeExpert!</h2>
        <div className='info__cards'>
          <div className='info__card'>
            <div className='card__header'>
              <img src={technologiesIcon} alt='technologiesicon' />
              <h3>Technologies you will learn</h3>
            </div>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript/ES6</li>
              <li>React & Redux</li>
              <li>Node.js/Express</li>
              <li>MongoDB</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className='info__card'>
            <div className='card__header'>
              <img src={toolsIcon} alt='technologiesicon' />
              <h3>Tools you will learn</h3>
            </div>
            <ul>
              <li>Git/Github</li>
              <li>Terminal</li>
              <li>VS Code</li>
              <li>Jira Software</li>
            </ul>
          </div>
          <div className='info__card'>
            <div className='card__header'>
              <img src={titlesIcon} alt='technologiesicon' />
              <h3>Titles you will gain</h3>
            </div>
            <ul>
              <li>Front End Developer</li>
              <li>Back End Developer</li>
              <li>Full Stack Developer</li>
              <li>React Developer</li>
              <li>Node Developer</li>
            </ul>
          </div>
        </div>
        <h2>Ready to become a web developer?</h2>
        <Button currentScreen={'feature'} screenName='register' onClick={() => onScreenChange('register')} bgRequired={true} />
      </div>
    )
  }
}
