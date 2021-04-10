import React from 'react'
import HeaderComp from './components/headercomp/HeaderComp'
import Footer from './components/footer/Footer'
import MainBody from './components/main/MainBody'
import './App.scss'

const App = () => {
  const appData = []
  
  return (
    <div className="main-app">
      <div className="in-main-app">
        <HeaderComp />

        <MainBody />

        <Footer />
      </div>
    </div>
  )
}

export default App