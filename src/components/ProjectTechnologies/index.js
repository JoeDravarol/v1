import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const ProjectTechnologies = ({ projectType, projectTitle, technologies }) => (
  // projectType is either 'featured' or 'other'

  <ul className={`technologies ${projectType}__technologies`}>
    {technologies.map(technology => {
      const { id, content } = technology

      return (
        <li key={id} className={`technology ${projectType}__technology`}>
          {content}
        </li>
      )
    })}
  </ul>
)

ProjectTechnologies.propTypes = {
  projectType: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
}

export default ProjectTechnologies
