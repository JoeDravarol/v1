import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Skill from './Skill'

import './index.scss'

const SkillsList = () => {
  const { allSkillsJson } = useStaticQuery(graphql`
    query Skills {
      allSkillsJson {
        edges {
          node {
            id
            title
            skills
          }
        }
      }
    }
  `)

  const allSkills = allSkillsJson.edges.map(edge => edge.node)

  return (
    <section className="section skills">
      <h2 className="section__heading skills__heading">Tools I've work with</h2>

      <section className="skills-content">
        {allSkills.map(skillData => (
          <Skill title={skillData.title} skills={skillData.skills} />
        ))}
      </section>
    </section>
  )
}

export default SkillsList
