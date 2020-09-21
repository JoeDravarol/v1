import React from 'react'

import Skill from './Skill'

import './index.scss'

const SkillsList = ({ allSkills }) => {
  return (
    <section className="section skills">
      <h2 className="section__heading skills__heading">Tools I've work with</h2>

      <section className="skills-content">
        {allSkills.map(skillData => {
          const { id, title, skills } = skillData

          return <Skill key={id} title={title} skills={skills} />
        })}
      </section>
    </section>
  )
}

export default SkillsList
