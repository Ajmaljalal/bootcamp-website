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
          <h1 className='feature__text__header'>Become a web developer by building real world projects</h1>
          <div className='feature__divider' />
          <p className='feature__text__desc'>With CodeExpert, by building dozens of real world projects with enterprise level professionals, programing makes much more sense</p>
          <button className='feature__text__btn' onClick={() => this.setScreen('register')}>Apply Now</button>
          <button
            onClick={() => document.getElementById('#more').scrollIntoView(
              { behavior: "smooth" }
            )}
            className='feature__text__btn feature__text__btn--outlined'>
            Learn More
            </button>
        </div>
      </div>
    )
  }
}
