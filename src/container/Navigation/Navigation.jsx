import React, { useState } from "react"
import "./Navigation.css"
import logo from "./image/logo.svg"
import Button from "../../components/Button/Button"

import menu from "./icon/menu.svg"
import close from "./icon/close.svg"

const Navigation = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="Tripma Logo" />
      <div className={show ? "nav-pages" : "nav-pages idle"}>
        <li>
          <a className="nav" href="#">
            Flights
          </a>
        </li>
        <li>
          <a className="nav" href="#">
            Hotels
          </a>
        </li>
        <li>
          <a className="nav" href="#">
            Packages
          </a>
        </li>
        <li>
          <a className="nav" href="#">
            Sing In
          </a>
        </li>
        <li>
          <Button buttonText={"Sing Up"} />
        </li>
      </div>
      <div className="menu">
        <img src={show ? close : menu} alt="menu" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Navigation
