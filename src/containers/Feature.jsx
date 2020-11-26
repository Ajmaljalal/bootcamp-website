import React, { Component } from 'react'

export default class Feature extends Component {
  setScreen = (screen) => {
    const { screenChangerFunc } = this.props
    screenChangerFunc(screen)
  }
  render() {

    return (
      <div className='feature'>
        <div className='feature__text'>
          <h1 className='feature__text__header'>Learn web development with real world projects</h1>
          <div className='feature__divider' />
          <p className='feature__text__desc'>Web developement/coding is made easy by building tons of real world projects with enterprise level professionals. This is not just a coding bootcamp but a 4 months intense working experience that prepares you for software engineer roles in the real world.</p>
          <button className='feature__text__btn' onClick={() => this.setScreen('register')}>Apply Now</button>
          <button className='feature__text__btn feature__text__btn--outlined' onClick={() => this.setScreen('syllabus')}>Learn More</button>
        </div>
      </div>
    )
  }
}
