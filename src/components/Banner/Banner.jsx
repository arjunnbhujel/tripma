import React, { useState } from "react"
import "./Banner.css"
import XClose from "../../assets/icons/xclose.svg"

const Banner = () => {
  const [show, setShow] = useState(true)

  const handleClick = (event) => {
    event.preventDefault()
    setShow(false)
  }

  return (
    <>
      {show && (
        <div className="banner">
          <div className="banner-text">
            <p>
              Join Tripma today and save up to 20% on your flight using code
              TRAVEL at checkout. Promotion valid for new users only.
            </p>
          </div>
          <img
            className="x-icon"
            src={XClose}
            alt="X Close Icon"
            onClick={handleClick}
          />
        </div>
      )}
    </>
  )
}

export default Banner
