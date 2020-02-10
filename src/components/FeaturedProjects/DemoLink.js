import React from 'react'
import PropTypes from 'prop-types'

const DemoLink = ({ link, children }) => (
  <a
    href={link}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label="Demo Link"
  >
    {children}
  </a>
)

DemoLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default DemoLink
