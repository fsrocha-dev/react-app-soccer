import React from 'react'
import './HomeContentCard.css'

const HomeContentCard = ({ title, subTitle }) => (
  <div className="home-content-card">
    <h3>{title}</h3>
    <p>{subTitle}</p>
  </div>
)

export default HomeContentCard