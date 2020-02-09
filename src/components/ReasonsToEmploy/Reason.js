import React from 'react'

const Reason = ({ title, description }) => (
  <div className="reason">
    <h3 className="reason__title">{title}</h3>
    <p className="reason__description">{description}</p>
  </div>
)

export default Reason
