import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News_item from './components/News_item'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <>
      <Router>
      <div className="color">
      <section className='back'>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News_item key='general' category='general' /></Route>
          <Route exact path="/bussiness"><News_item key='bussiness' category='business' /></Route>
          <Route exact path="/sports"><News_item key='sports' category='sports' /></Route>
          <Route exact path="/technology"><News_item key='Science' category='technology' /></Route>
          <Route exact path="/science"><News_item key='science' category='science' /></Route>
          <Route exact path="/health"><News_item key='health' category='health' /></Route>
          <Route exact path="/general"><News_item key='general' category='general' /></Route>
        </Switch>
        </section>
        </div>
        </Router>
      </>
    )
  }
}

export default App
