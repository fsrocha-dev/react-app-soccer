import React from 'react'

import './Home.css'
import Logo from '../../Template/Logo/Logo'

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <Logo />
      </div>
      <div className="home-content-grid">
        <div>
          <h1>Torça pelo seu time</h1>
          <p>qualquer coisa</p>
        </div>
      </div>
    </div>
  )
}

export default Home