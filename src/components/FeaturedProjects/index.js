import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Project from './Project'

import './index.scss'

const FeaturedProjects = () => {
  const { allFeaturedProjectsJson } = useStaticQuery(graphql`
    query AllFeaturedProjects {
      allFeaturedProjectsJson {
        edges {
          node {
            id
            title
            description
            technologies
            githubLink
            demoLink
            image {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = allFeaturedProjectsJson.edges.map(edge => edge.node)

  return (
    <section id="portfolio" className="section featured-projects">
      <h2 className="section__heading featured-projects__heading">
        Featured Projects
      </h2>

      {projects.map(project => {
        const imageData = project.image.childImageSharp.fluid

        return <Project key={project.id} {...project} imageData={imageData} />
      })}
    </section>
  )
}

export default FeaturedProjects
