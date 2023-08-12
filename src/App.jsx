import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'

import './app.css'
import LiveBtn from './components/LiveBtn'

const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient"/>
        </div>

        <div className="app">
            <Hero />
            <Demo />
            <LiveBtn />
        </div>
    </main>
  )
}

export default App
