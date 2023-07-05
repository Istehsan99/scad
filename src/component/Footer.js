import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <div className='thefooter'>
        <footer className="bg-body-secondary">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <h5>About Us</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.</p>
      </div>
      <div className="col-md-3">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/general">General</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Contact Us</h5>
        <ul className="list-unstyled">
          <li><i className="fa fa-map-marker"></i>123 Main Street, New York, NY 10001</li>
          <li><i className="fa fa-phone"></i> (123) 456-7890</li>
          <li><i className="fa fa-envelope"></i> <a href="mailto:info@newsflasher.com">info@newsflasher.com</a></li>
        </ul>
      </div>
      <div className="col-md-3">
        <h5>Follow Us</h5>
        <ul className="list-unstyled">
          <li><a href="/"><i className="fa fa-facebook"></i> Facebook</a></li>
          <li><a href="/"><i className="fa fa-twitter"></i> Twitter</a></li>
          <li><a href="/"><i className="fa fa-instagram"></i> Instagram</a></li>
          <li><a href="/"><i className="fa fa-linkedin"></i> LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <hr/>
        <div className="text-center">
          <p>&copy; 2023 NewsFlasher - All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</footer>

      </div>
    )
  }
}

export default Footer