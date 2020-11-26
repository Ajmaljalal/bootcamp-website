import React, { Component } from 'react'
import Project1 from '../assets/project-1.PNG'
import Project2 from '../assets/project-2.PNG'
import Project3 from '../assets/project-3.PNG'
import Project4 from '../assets/project-4.PNG'
import Project5 from '../assets/project-5.PNG'
import Project6 from '../assets/project-6.PNG'

export default class Projects extends Component {

  renderProjects = () => {
    const projects = [
      {
        image: Project1,
        title: 'Messages',
        desc: 'This is a UI build with css and html for begginers. We will make a message UI using html and css',
        cohort: 'html',
        level: 'Beginner',
        option: 'Required'
      },
      {
        image: Project2,
        title: 'Daria Nkitina',
        desc: 'This is a UI build with css and html for Beginners. We will be making a profile UI for Daria to chat with her freinds',
        cohort: 'html',
        level: 'Beginner',
        option: 'Required'
      },
      {
        image: Project3,
        title: 'Projects',
        desc: 'This is a UI build with css and html for Beginners. This is a showcase of all the projects that a person will be building',
        cohort: 'html',
        level: 'Beginner',
        option: 'Elective'
      },
      {
        image: Project4,
        title: 'OMac',
        desc: 'This is a UI build with css and html for Beginners. This one is a medium level project with css and html for those who finishe the first one',
        cohort: 'html',
        level: 'Medium',
        option: 'Required'
      },
      {
        image: Project5,
        title: 'Real Engines',
        desc: 'This is a UI build with css and html for Beginners. Here we will be making real engines that is use for displaying real data',
        cohort: 'html',
        level: 'Advance',
        option: 'Required'
      },
      {
        image: Project6,
        title: 'Dashboard',
        desc: 'This is a UI build with css and html for Beginners. This is a black mode css and html web project for advance users',
        cohort: 'html',
        level: 'Advance',
        option: 'Required'
      },
    ]

    return projects.map((project, index) => {
      return (
        <div className='projects__list-item' key={index}>
          <div className='list-item__screenshot'>
            <img src={project.image} alt='project-screenshot' />
          </div>
          <div className='list-item__desc'>
            <div className='list-item__title'>
              {project.title}
            </div>
            <div className='list-item__desc-text'>
              {project.desc}
            </div>
            <div className='list-item__tags'>
              <div className='tags-item tags-item--green'>{project.cohort}</div>
              <div className='tags-item tags-item--orange'>{project.level}</div>
              <div className='tags-item tags-item--red'>{project.option}</div>
            </div>
          </div>
        </div>
      )
    })
  }
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
          {this.renderProjects()}
        </div>
      </div>
    )
  }
}
