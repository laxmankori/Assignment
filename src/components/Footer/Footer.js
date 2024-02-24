import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
<div className="footer">
    <div className="footer_container">
      <div className="footer-left">

      <div className="categerious">
<h1>Categories</h1>
<ul>
  <li>Web Builder</li>
  <li>Hosting</li>
  <li>Data Center</li>
  <li>Robotic-Automation</li>
</ul>
      </div>
      <div className="contact">
<h1>Contact</h1>
<ul>
  <li>Contact</li>
  <li>Privacy Policy</li>
  <li>Terms Of Service</li>
  <li>Categories</li>
  <li>About</li>
</ul>
      </div>
      </div>
      <div className="footer_right">
<p>United States</p>
<img src="./images/down_arrow2.png" alt="" />
    
      </div>
    </div>
</div>
  )
}

export default Footer
