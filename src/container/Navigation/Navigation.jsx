import React from "react"
import "./Navigation.css"
import logo from "./image/logo.svg"
import Button from "../../components/Button/Button"

const Navigation = () => {
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="Tripma Logo" />
      <div className="nav-pages">
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
    </div>
  )
}

export default Navigation
