import React, { Component } from 'react'
import DesignSpots from './helpers/designSpots';
import Button from './helpers/Button';
import instructorIcon from '../assets/instructor.svg'
import supportIcon from '../assets/suport.svg'
import interviewIcon from '../assets/interview.svg'
import blueEllipse from '../assets/ellipse-bluet.svg'
import purpleDot from '../assets/dot-purple.svg'
import redEllips from '../assets/ellipse-pink.svg'

export default class Feature extends Component {
  setScreen = (screen) => {
    const { screenChangerFunc } = this.props
    screenChangerFunc(screen)
  }
  render() {
    return (
      <div className='feature'>
        {this.renderMain()}
        {this.renderPerks()}
        {DesignSpots(blueEllipse, 50, 20)}
        {DesignSpots(purpleDot, 20, 80)}
        {DesignSpots(redEllips, 90, 50)}
      </div>
    )
  }

  renderMain = () => {
    return (
      <div className='feature__text'>
        <h1 className='feature__text__header'>Become a <span>web developer</span> by building real world projects</h1>
        <p className='feature__text__desc'>With codxpert, by building dozens of real world projects with enterprise level professionals, programing makes much more sense</p>
        <div>
        <Button currentScreen={'register'} screenName='register' onClick={this.setScreen} bgRequired={true} />
          <div
            onClick={() => document.getElementById('#more').scrollIntoView(
              { behavior: "smooth" }
            )}
            className='feature__text__btn feature__text__btn--outlined'>
            Learn More
          </div>
        </div>
      </div>
    )
  }

  renderPerks = () => {
    return (
      <div className='feature__perks-w'>
        <div className='feature__perks__card'>
          <div className='perks__card__right-border'></div>
          <div className='perks__card__icon perks__card__icon--primary'>
            <img src={instructorIcon} alt='instructor' />
          </div>
          <div className='perks__card__text'>
            Professional Instructors
            </div>
        </div>
        <div className='feature__perks__card'>
          <div className='perks__card__right-border'></div>
          <div className='perks__card__icon'>
            <img src={supportIcon} alt='instructor' />
          </div>
          <div className='perks__card__text'>
            Real world projects
            </div>
        </div>
        <div className='feature__perks__card'>
          <div className='perks__card__right-border'></div>
          <div className='perks__card__icon'>
            <img src={interviewIcon} alt='instructor' />
          </div>
          <div className='perks__card__text'>
            Job Interview Preparation
          </div>
        </div>
      </div>
    )
  }
}
