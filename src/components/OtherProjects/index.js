import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Project from './Project'

import './index.scss'

const OtherProjects = () => {
  const { allOtherProjectsJson } = useStaticQuery(graphql`
    query OtherProjects {
      allOtherProjectsJson {
        edges {
          node {
            id
            title
            description
            technologies
            githubLink
            demoLink
          }
        }
      }
    }
  `)

  const projects = allOtherProjectsJson.edges.map(edge => edge.node)

  return (
    <section className="section other-projects">
      <h2 className="section__heading other-projects__heading">Other Projects</h2>

      <div className="other-projects__content">
        {projects.map(project =>
          <Project
            key={project.id}
            {...project}
          />
        )}
      </div>
    </section>
  )
}

export default OtherProjects