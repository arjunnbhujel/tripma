import React from "react"
import "./Header.css"
import BaseTextInput from "../../components/BaseTextInput/BaseTextInput"
import Button from "../../components/Button/Button"

import departure from "./icons/departure.svg"
import arrival from "./icons/arrival.svg"
import calendar from "./icons/calendar.svg"
import person from "./icons/person_solid.svg"

const Header = () => {
  return (
    <div className="hero">
      <h1 className="hero-text">It’s more than just a trip</h1>
      <div className="flightSearch">
        <BaseTextInput placeholder={"From where?"} iconSource={departure} />
        <div className="divider"></div>
        <BaseTextInput placeholder={"Where to?"} iconSource={arrival} />
        <div className="divider"></div>
        <BaseTextInput placeholder={"Depart - Return"} iconSource={calendar} />
        <div className="divider"></div>
        <BaseTextInput placeholder={"1 adult"} iconSource={person} />
        <Button buttonText={"Search"} />
      </div>
    </div>
  )
}

export default Header
