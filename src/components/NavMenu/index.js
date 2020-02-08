import React, { useState } from 'react'

import HamburgerBtn from './HamburgerBtn'
import Nav from './Nav'
import NavSocial from './NavSocial'

import './index.scss'

const NavMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleToggleNavOpen = () => {
    setIsNavOpen(isMenuOpen => !isMenuOpen)
  }

  return (
    <header class="navigation-container">
      <HamburgerBtn handleToggleNavOpen={handleToggleNavOpen} />
      <Nav isNavOpen={isNavOpen} />
      <NavSocial />
    </header>
  )
}

export default NavMenu
