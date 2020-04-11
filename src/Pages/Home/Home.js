import React from 'react'

import './Home.css'
import Logo from '../../Template/Logo/Logo'
import HomeContentCard from '../../Template/HomeContentCard/HomeContentCard'

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <Logo />
      </div>
      <div className="home-content-grid">
        <HomeContentCard title="Torça pelo seu time" subTitle="Veja os resultados" />
        <HomeContentCard title="Torça pelo seu time" subTitle="Veja os resultados" />
        <HomeContentCard title="Torça pelo seu time" subTitle="Veja os resultados" />
      </div>
    </div>
  )
}

export default Home