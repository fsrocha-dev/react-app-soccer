import React from 'react'
import './Logo.css'
import urlBola from '../../static/bola.png'

const height = "2em"

const Logo = () => (
  <div className="home-logo">
    <div className="logo">
      <img src={urlBola} alt="Logo Soccer" style={{ height }} />
      <h3 style={{ lineHeight: height, fontSize: height }}>
        <strong>Brazil</strong> Soccer
    </h3>
    </div>
  </div >
)

export default Logo