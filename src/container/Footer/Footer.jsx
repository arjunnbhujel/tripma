import React from "react"
import "./Footer.css"

import logo from "./Image/logo.svg"
import appStore from "./Image/app_store.png"
import googlePlay from "./Image/google_play.png"

import Copyright from "../../components/Copyright/Copyright"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_link">
        <img src={logo} alt="Logo" className="footer_logo" />
        <div className="links about_links">
          <p className="link_head">About</p>
          <a href="#">About Tripma</a>
          <a href="#">How It Works</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
          <a href="#">Forum</a>
        </div>
        <div className="links partner_links">
          <p className="link_head">Partner with us</p>
          <a href="#">Partnership programs</a>
          <a href="#">Affiliate program</a>
          <a href="#">Connectivity partners</a>
          <a href="#">Promotions and events</a>
          <a href="#">Integrations</a>
          <a href="#">Community</a>
          <a href="#">Loyalty program</a>
        </div>
        <div className="links support_links">
          <p className="link_head">Support</p>
          <a href="#">Help Center</a>
          <a href="#">Contact us</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Trust and safety</a>
          <a href="#">Accessibility</a>
        </div>
        <div className="links app_links">
          <p className="link_head">Get the app</p>
          <a href="#">Tripma for Android</a>
          <a href="#">Tripma for iOS</a>
          <a href="#">Mobile site</a>
          <a href="#">
            <img src={appStore} alt="App Store Link" />
          </a>
          <a href="#">
            <img src={googlePlay} alt="Google Play Link" />
          </a>
        </div>
      </div>
      <Copyright />
    </div>
  )
}

export default Footer
