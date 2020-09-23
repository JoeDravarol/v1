import React from 'react'
import PropTypes from 'prop-types'

const NavLink = ({ classNames, to, children, newTab }) => (
  <a className={classNames} href={to} target={newTab ? '_blank' : '_self'}>
    {children}
  </a>
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
