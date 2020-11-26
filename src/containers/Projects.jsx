import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div className='projects-w'>
        <div className='projects__header'>
          <div className='projects__header__btns-w'>
            <div className='projects__header__btn'>HTML & CSS</div>
            <div className='projects__header__btn'>Vanila JavaScript</div>
            <div className='projects__header__btn'>React & Redux</div>
            <div className='projects__header__btn'>Node, Express & Databases</div>
          </div>
          <div>list view</div>
        </div>
        <div className='projects__list'>
          <div className='projects__list-item'>
            <div></div>
          </div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
          <div className='projects__list-item'>One</div>
        </div>
      </div>
    )
  }
}
