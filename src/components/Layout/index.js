/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import NavMenu from 'components/NavMenu'

import 'normalize.css'
import 'styles/global.scss'
import './index.scss'

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <NavMenu />

      <main className="main">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
