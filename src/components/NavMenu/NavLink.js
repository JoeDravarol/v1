import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PropTypes from 'prop-types'

const NavLink = ({ classNames, to, children, newTab }) => (
  <AnchorLink
    className={classNames}
    to={to}
    target={newTab ? '_blank' : '_self'}
  >
    {children}
  </AnchorLink>
)

NavLink.propTypes = {
  classNames: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

NavLink.defaultProps = {
  classNames: 'main-nav__link',
}

export default NavLink
