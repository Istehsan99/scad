// import React, { Component } from 'react'
const Newsitem = (props)=> {
      let {title , discription, imageUrl , newsUrl, date, author, source} = props
    return (
      <div>

    <div className="card border-0 shadow-sm">
  <a href={newsUrl} target="_blank" rel="noreferrer">
    <img src={imageUrl = imageUrl ? imageUrl :  require('./logo.png')} alt="news" className="card-img-top rounded-top" />
  </a>
  <div className="card-body">
    <h5 className="card-title mb-0">{title}</h5><span className="badge text-bg-info small">{source}</span>
    <div className="d-flex flex-row justify-content-between align-items-center mt-2">
      <span className="text-muted sm small">Published by {!author?"unknown": author} on {new Date(date).toGMTString()}</span>
      <a href={newsUrl} className="btn btn-sm btn-outline-primary buttons" target="_blank" rel="noreferrer">
        Read More
      </a> 
    </div>
  </div>
</div>

      </div>
    )
}

export default Newsitem