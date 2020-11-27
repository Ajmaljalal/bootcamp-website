import React, { Component } from 'react'

export default class More extends Component {
  render() {
    return (
      <div id='#more' className='more-w'>
        <div className='more__title'>
          <h2>What is CodeExpert</h2>
        </div>
        <div className='more__desc'>
          CodeExpert is a 6 months coding bootcamp that unlike other bootcamps focuses more on the students than the code. We build our curriculum based on the responses of students and the experience of experts in the field. CodeExpert teaches the most essential skills and progarming languages to help students make real world web apps.
        </div>
        <div className='info__why'>
          <h3>Why CodeExpert?</h3>
          <p>Our program is carefully designed to respond to the dynamic needs of the web development job market. At the end of the training, you will have gained the necessary skills to enter the market and secure a job.</p>
          <ul>
            <li>Experienced and Professional Instructors on hand</li>
            <li>Student Support</li>
            <li>Real World Front End, Back End and Full Stack Projects</li>
            <li>Up to Date Training Materials</li>
            <li>Resume and Job Interview Preparation</li>
          </ul>
        </div>
        <div className='info__cards-w'>
          <div className='info__card'>
            <h3>Technologies you will learn</h3>
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
            <h3>Tools you will learn</h3>
            <ul>
              <li>Git/Github</li>
              <li>Terminal</li>
              <li>VS Code</li>
              <li>Jira Software</li>
            </ul>
          </div>
          <div className='info__card'>
            <h3>Titles you will gain</h3>
            <ul>
              <li>Front End Developer</li>
              <li>Back End Developer</li>
              <li>Full Stack Developer</li>
              <li>React Developer</li>
              <li>Node Developer</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
