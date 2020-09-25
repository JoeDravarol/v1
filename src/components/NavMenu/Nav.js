import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import NavList from './NavList'
import NavLink from './NavLink'

const Nav = ({ isNavOpen, resume }) => {
  const data = useStaticQuery(graphql`
    query ResumeQuery {
      contentfulResume {
        id
        resume {
          file {
            url
          }
        }
      }
    }
  `)

  const resumePdf = data.contentfulResume.resume.file.url

  return (
    <nav className={`main-nav ${!isNavOpen && 'main-nav--collapse'}`}>
      <ul className="main-nav__ul">
        <NavList>
          <NavLink to="/#home">Home</NavLink>
        </NavList>

        <NavList>
          <NavLink to="/#about">About</NavLink>
        </NavList>

        <NavList>
          <NavLink to="/#portfolio">Portfolio</NavLink>
        </NavList>

        <NavList>
          <NavLink to={resumePdf} newTab={true}>
            Resume
          </NavLink>
        </NavList>
      </ul>
    </nav>
  )
}

export default Nav
