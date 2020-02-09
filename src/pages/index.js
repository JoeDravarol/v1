import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Home from 'components/Home'
import About from 'components/About'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
  </Layout>
)

export default IndexPage
