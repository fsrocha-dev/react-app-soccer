import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'

import NavBar from './Template/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Brasileirao from './Pages/Brasileirao/Brasileirao'
import LiveMatch from './Pages/LiveMatch/LiveMatch'

const App = () => (
  <BrowserRouter>
    <>
      <NavBar />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/brasileirao" component={Brasileirao} />
        <Route path="/ao-vivo" component={LiveMatch} />
      </main>
    </>
  </BrowserRouter>
)

export default App;