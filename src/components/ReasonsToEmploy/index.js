import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Reason from './Reason'

import './index.scss'

const ReasonsToEmploy = () => {
  const { allReasonsJson } = useStaticQuery(graphql`
    query Reasons {
      allReasonsJson {
        edges {
          node {
            id
            description
            title
          }
        }
      }
    }
  `)
  const reasons = allReasonsJson.edges.map(edge => edge.node)

  return (
    <section className="section reasons-to-employ">
      <h2 className="section__heading reasons-to-employ__heading">
        Why work with me?
      </h2>

      <div className="reasons">
        {reasons.map(reason => (
          <Reason
            key={reason.id}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ReasonsToEmploy
