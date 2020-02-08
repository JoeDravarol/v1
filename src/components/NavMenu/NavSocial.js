import React from 'react'

import NavList from './NavList'
import GithubSvg from 'components/Svg/Github'
import EmailSvg from 'components/Svg/Email'

const NavSocial = () => (
  <div className="social">
    <ul className="social__ul">
      <NavList classNames="social__list">
        <a
          className="social__link social__link--github"
          href="https://github.com/JoeDravarol"
          rel="nofollow noreferrer noopener"
          target="_blank"
          aria-label="Github Link"
        >
          <GithubSvg />
        </a>
      </NavList>

      <NavList classNames="social__list">
        <a
          className="social__link social__link--emai"
          href="mailto:joedravarol@gmail.com"
          aria-label="Email"
        >
          <EmailSvg />
        </a>
      </NavList>
    </ul>
  </div>
)

export default NavSocial
