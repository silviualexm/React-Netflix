import React from 'react'
import '../style.css'


const Footer = () => {
    return (

<footer className="container">
  <div className="row social-icons">
    <div className="container">
      <ul>
        <li className="list-inline-item">
          <ion-icon name="logo-facebook" />
        </li>
        <li className="list-inline-item">
          <ion-icon name="logo-instagram" />
        </li>
        <li className="list-inline-item">
          <ion-icon name="logo-twitter" />
        </li>
        <li className="list-inline-item">
          <ion-icon name="logo-youtube" />
        </li>
      </ul>
      <div className="row">
        <div className="col col-12 col-sm-6 col-lg-3 px-0 footer-info ">
          <ul>
            <li>Audio and Subtitles</li>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            <br />
            <br />
            <li>Service Code</li>
            <li>© 1997-2021 Netflix, Inc.</li>
          </ul>
        </div>
        <div className="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div className="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div className="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

       
    )
}

export default Footer