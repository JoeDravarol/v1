import React from 'react'
import PropTypes from 'prop-types'

const NavList = ({ classNames, children }) => (
  <li className={classNames}>{children}</li>
)

NavList.propTypes = {
  classNames: PropTypes.string,
}

NavList.defaultProps = {
  classNames: 'main-nav__list',
}

export default NavList
