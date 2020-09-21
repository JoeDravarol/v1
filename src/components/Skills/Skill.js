import React from 'react'

const Skill = ({ title, skills }) => (
  <section className="skill">
    <h3 className="skill__title">{title}</h3>

    <ul className="skill__ul">
      {skills.map(skill => {
        const { id, content } = skill

        return (
          <li key={id} className="skill__list">
            {content}
          </li>
        )
      })}
    </ul>
  </section>
)

export default Skill
