import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import NavBar from './NavBar/NavBar'

const Home = () => (<div>Home</div>)
const Brasileirao = () => (<div>Brasileirao</div>)
const AoVivo = () => (<div>Ao vivo</div>)

const App = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/brasileirao" component={Brasileirao} />
        <Route path="/ao-vivo" component={AoVivo} />
      </main>
    </>
  </BrowserRouter>
)

export default App;