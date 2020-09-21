import React from 'react'
import PropTypes from 'prop-types'

import ProjectLinks from '../ProjectLinks'
import ProjectTechnologies from '../ProjectTechnologies'

const Project = ({
  title,
  description,
  technologies,
  repositoryLink,
  demoLink,
}) => {
  return (
    <section className="other-project">
      <h3 className="other-project__title">{title}</h3>
      <p className="other-project__description">{description.description}</p>

      <ProjectTechnologies
        projectType="other-project"
        projectTitle={title}
        technologies={technologies}
      />
      <ProjectLinks
        projectType="other-project"
        repository={repositoryLink}
        demo={demoLink}
      />
    </section>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
}

export default Project
