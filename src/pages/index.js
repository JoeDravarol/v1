import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Home from 'components/Home'
import About from 'components/About'
import FeaturedProjects from 'components/FeaturedProjects'
import OtherProjects from 'components/OtherProjects'
import ReasonsToEmploy from 'components/ReasonsToEmploy'
import Skills from 'components/Skills'

const IndexPage = ({ data }) => {
  const {
    allContentfulFeaturedProject,
    allContentfulOtherProject,
    allContentfulPortfolioSkill,
  } = data

  // Collect data from graphql edges
  const allSkills = allContentfulPortfolioSkill.edges.map(edge => edge.node)
  const allFeaturedProjects = allContentfulFeaturedProject.edges.map(
    edge => edge.node
  )
  const allOtherProjects = allContentfulOtherProject.edges.map(
    edge => edge.node
  )

  return (
    <Layout>
      <SEO />
      <Home />
      <About />
      <FeaturedProjects projects={allFeaturedProjects} />
      <OtherProjects projects={allOtherProjects} />
      <Skills allSkills={allSkills} />
      <ReasonsToEmploy />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PortfolioContentsQuery {
    allContentfulFeaturedProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          technologies {
            id
            content
          }
          repositoryLink
          demoLink
          previewImage {
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }

    allContentfulOtherProject(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          description {
            description
          }
          technologies {
            id
            content
          }
          repositoryLink
          demoLink
        }
      }
    }

    allContentfulPortfolioSkill(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          skills {
            id
            content
          }
        }
      }
    }
  }
`
