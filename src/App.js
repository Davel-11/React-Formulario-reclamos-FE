import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss'
import Reports from './components/reports/Reports'
import HeaderComp from './components/headercomp/HeaderComp';
import Footer from './components/footer/Footer';
import MainBody from './components/main/MainBody'
import Site from './components/sitio/Site';
import Student from './components/student/Student';

const App = () => {
  const appData = []
  
  return (
    <div className="main-app">
      <BrowserRouter>
      <HeaderComp />
        <Switch>
          <Route path="/reports" component={Reports} ></Route>
          <Route path="/site" component={Site} ></Route>
          <Route path="/student" component={Student} ></Route>
          <Route path="/" exact component={MainBody} ></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App