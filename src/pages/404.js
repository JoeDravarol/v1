import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="section 404">
      <h1 className="section__heading 404__heading">NOT FOUND</h1>
      <p className="section__text 404__text">You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  </Layout>
)

export default NotFoundPage
