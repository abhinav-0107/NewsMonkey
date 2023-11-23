import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title,description,imageURL,newsURL} = this.props; // destructuring in JS

    return (
      <div className='my-2'>
        <div className="card" style={{width : "18rem"}}>
        <img src={imageURL?imageURL:"https://st2.depositphotos.com/1129865/6551/i/600/depositphotos_65515651-stock-photo-news.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}
