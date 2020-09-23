import React from 'react'

import Project from './Project'

import './index.scss'

const FeaturedProjects = ({ projects }) => {
  return (
    <section id="portfolio" className="section featured-projects">
      <h2 className="section__heading featured-projects__heading">
        Featured Projects
      </h2>

      {projects.map(project => {
        const imageData = project.previewImage.fluid

        return <Project key={project.id} {...project} imageData={imageData} />
      })}
    </section>
  )
}

export default FeaturedProjects
