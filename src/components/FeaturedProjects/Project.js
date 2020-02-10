import React from 'react'
import PropTypes from 'prop-types'

import DemoLink from './DemoLink'
import ProjectTechnologies from 'components/ProjectTechnologies'
import ProjectLinks from 'components/ProjectLinks'

const Project = ({
  title,
  description,
  technologies,
  github,
  demo,
  imgSource,
}) => (
  <section className="featured">
    <div className="featured__content">
      <DemoLink link={demo}>
        <h3 className="featured__title">{title}</h3>
      </DemoLink>
      <p className="featured__description">{description}</p>

      <ProjectTechnologies
        projectType="featured"
        projectTitle={title}
        technologies={technologies}
      />
      <ProjectLinks projectType="featured" github={github} demo={demo} />
    </div>

    <div className="featured__img-container">
      <DemoLink link={demo}>
        <img
          className="featured__img"
          src={imgSource}
          alt={`${title}'s project preview`}
        />
      </DemoLink>
    </div>
  </section>
)

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
}

export default Project
