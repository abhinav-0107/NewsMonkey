import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import Footer from './component/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={9} country='in'/>  
        <Footer/>       
      </div>
    )
  }
}
