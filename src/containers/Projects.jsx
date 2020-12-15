import React, { Component } from 'react'
import { projects } from './data'
import listIcon from '../assets/list.svg'
import gridIcon from '../assets/grid.svg'

export default class Projects extends Component {

  state = {
    projects: 'html'
  }

  setCurrentProjectsTab = (tab) => {
    this.setState({
      projects: tab
    })
  }
  renderProjects = () => {

    return projects.filter(project => {
      return project.cohort === this.state.projects
    }).map((project, index) => {
      return (
        <div className='projects__list-item' key={index}>
          <div className='list-item__tags'>
            <div className='tags-item tags-item--blue'>{project.cohort}</div>
            <div className='tags-item tags-item--purple'>{project.level}</div>
            <div className='tags-item tags-item--red'>{project.option}</div>
          </div>
          <div className='list-item__icon'>
            <img src={project.image} alt='project-icon' />
          </div>
          <div className='list-item__desc'>
            <div className='list-item__title'>
              {project.title}
            </div>
            <div className='list-item__desc-text'>
              {project.desc}
            </div>
            <div className='list-item__preview'><a href={project.link} target='blank'>Preview project</a></div>
          </div>
        </div>
      )
    })
  }
  render() {
    const { projects } = this.state
    return (
      <div className='projects-w'>
        <div className='projects__header'>
          <div className='projects__header__btns-w'>
            <div className={projects === 'html' ? 'projects__header__btn projects__header__btn--border-bottom' : 'projects__header__btn'} onClick={() => this.setCurrentProjectsTab('html')}>HTML & CSS</div>
            <div className={projects === 'javascript' ? 'projects__header__btn projects__header__btn--border-bottom' : 'projects__header__btn'} onClick={() => this.setCurrentProjectsTab('javascript')}>Vanila JavaScript</div>
            <div className={projects === 'react' ? 'projects__header__btn projects__header__btn--border-bottom' : 'projects__header__btn'} onClick={() => this.setCurrentProjectsTab('react')}>React & Redux</div>
            <div className={projects === 'node' ? 'projects__header__btn projects__header__btn--border-bottom' : 'projects__header__btn'} onClick={() => this.setCurrentProjectsTab('node')}>Node, Express & Databases</div>
          </div>
          <div className='projects__view-icons'>
            <img src={listIcon} alt='list view' />
            <img src={gridIcon} alt='grid view' />
          </div>
        </div>
        <div className='projects__list'>
          {this.renderProjects()}
        </div>
      </div>
    )
  }
}
