import React from 'react'

const HamburgerBtn = ({ handleToggleNavOpen }) => (
  <div className="hamburger-container hide-on-desktop">
    <button
      className="menu-btn menu-btn--open"
      aria-label="toggle menu"
      onClick={handleToggleNavOpen}
    >
      &#9776;
    </button>
  </div>
)

export default HamburgerBtn
