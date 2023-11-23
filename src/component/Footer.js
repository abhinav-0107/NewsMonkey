import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div >
      <div className="card">
      <div className="card-header bg-light text-dark" >
          <strong>About the Developer</strong> 
      </div>
      <div className="card-body bg-light text-dark">
          <blockquote className="blockquote">
          This web application is developed by <strong>Abhinav Singh</strong> , 4th year student at IIT(BHU), Varanasi.

            <br /> <strong>Technologies used -</strong> 
            <ol>
                <li>HTML </li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>BootStrap</li>
                <li>React JS</li>
            </ol>
            My Socials: 
            <ul>
                <li><a href='https://www.linkedin.com/in/abhinav-singh-432466206/'> Linkedin </a></li> 
                <li><a href='https://leetcode.com/abhinav_0107/'> LeetCode </a></li> 
                <li><a href='https://github.com/abhinav-0107'> GitHub </a></li> 
            </ul>
          </blockquote> 
      </div>
      </div>
  </div>
    )
  }
}
