import React from "react"
import "./Copyright.css"

import twitter from "./Icon/twitter.svg"
import instagram from "./Icon/instagram.svg"
import facebook from "./Icon/facebook.svg"

const Copyright = () => {
  return (
    <div className="copyright_bottom">
      <div className="copyright">
        <div className="icon">
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
        <p className="copyright_text">© 2020 Tripma incorporated</p>
      </div>
    </div>
  )
}

export default Copyright
