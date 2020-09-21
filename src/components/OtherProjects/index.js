import React from 'react'

import Project from './Project'

import './index.scss'

const OtherProjects = ({ projects }) => {
  return (
    <section className="section other-projects">
      <h2 className="section__heading other-projects__heading">
        Other Projects
      </h2>

      <div className="other-projects__content">
        {projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}

export default OtherProjects
