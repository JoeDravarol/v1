import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import PropTypes from 'prop-types'

const NavLink = ({ classNames, to, children, newTab }) => {
  if (newTab)
    return (
      <a className={classNames} href={to} target="_blank">
        {children}
      </a>
    )

  return (
    <AnchorLink className={classNames} to={to}>
      {children}
    </AnchorLink>
  )
}

NavLink.propTypes = {
  classNames: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

NavLink.defaultProps = {
  classNames: 'main-nav__link',
}

export default NavLink
