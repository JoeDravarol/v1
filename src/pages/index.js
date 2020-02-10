import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Home from 'components/Home'
import About from 'components/About'
import FeaturedProjects from 'components/FeaturedProjects'
import OtherProjects from 'components/OtherProjects'
import ReasonsToEmploy from 'components/ReasonsToEmploy'
import Skills from 'components/Skills'

const IndexPage = () => (
  <Layout>
    <SEO />
    <Home />
    <About />
    <FeaturedProjects />
    <OtherProjects />
    <Skills />
    <ReasonsToEmploy />
  </Layout>
)

export default IndexPage
