import React, { Component } from 'react'
import syllabusSteps from '../assets/syllabus-steps.svg'
import Button from './helpers/Button';

export default class Syllabus extends Component {
  render() {
    return (
      <div className='syllabus-w'>
        <div className='syllabus-header'>
          <h3>MERN Stack</h3>
          <p>Become a codxpert in 24-Weeks of full stack programing!</p>
        </div>
        <div className='syllabus-content'>
          <div className='program-weeks-w'>
            <div className='program-weeks'>
              <p><span>Week 1-3:</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 4-6:</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 7-9</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 10-12</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 13-15</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 16-18</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 19-21</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
            <div className='program-weeks'>
              <p><span>Week 22-24</span>
              Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
            </div>
          </div>
          <div className='program-steps-w'>
            <div className='program-steps-img'>
              <img src={syllabusSteps} alt='syllabussteps' />
            </div>
            <div className='program-steps'>
              <div className='program-step'>
                <span>Training 30%</span>
                <p>The training part will cover 30% of the curriculum guided by instructors. You'll be trained on the MERN Stack to be the best in the industry.</p>
              </div>
              <div className='program-step'>
                <span>Developement 70%</span>
                <p>Most of the time at the bootcamp you will be spending time playing with the code. Practical application is necessary whenever it comes to becoming a good programmer.</p>
              </div>
              <div className='program-step program-step--last'>
                <span>Building real world projects</span>
                <p>Technical Orientation on MERN Stack, How Internet Works, Classification of IP Addresses, Web Servers, Setting up Development Environment, HTML5,CSS3, Git & GitHub, Bootstrap 4, Advanced CSS & SAAS, JavaScript, EcmaScript6 (ES6), Node JS,Postman</p>
              </div>
              <Button currentScreen={'register'} screenName='register' onClick={this.setScreen} bgRequired={true} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
