import React from 'react'
import PropTypes from 'prop-types'

import GithubSvg from 'components/Svg/Github'
import DemoSvg from 'components/Svg/Demo'

import './index.scss'

// projectType is either 'featured' or 'other'
const ProjectLinks = ({ projectType, repository, demo }) => {
  const relAttribute = 'nofollow noopener noreferrer'
  const targetAttribute = '_blank'

  return (
    <div className={`project-links ${projectType}__links`}>
      <a
        className={`project-links__github ${projectType}__github`}
        href={repository}
        target={targetAttribute}
        rel={relAttribute}
        aria-label="Github Link"
      >
        <GithubSvg />
      </a>
      <a
        className={`project-links__demo ${projectType}__demo`}
        href={demo}
        target={targetAttribute}
        rel={relAttribute}
        aria-label="Demo Link"
      >
        <DemoSvg />
      </a>
    </div>
  )
}

ProjectLinks.propTypes = {
  projectType: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
}

export default ProjectLinks
