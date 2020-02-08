import React from 'react'

import NavList from './NavList'
import NavLink from './NavLink'

const Nav = ({ isNavOpen }) => (
  <nav className={`main-nav ${!isNavOpen && 'main-nav--collapse'}`}>
    <ul className="main-nav__ul">
      <NavList>
        <NavLink to="#home">Home</NavLink>
      </NavList>

      <NavList>
        <NavLink to="#about">About</NavLink>
      </NavList>

      <NavList>
        <NavLink to="#portfolio">Portfolio</NavLink>
      </NavList>

      <NavList>
        <NavLink to="resume.pdf">Resume</NavLink>
      </NavList>
    </ul>
  </nav>
)

export default Nav
