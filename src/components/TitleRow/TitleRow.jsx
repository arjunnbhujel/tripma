import React from "react"
import "./TitleRow.css"
import arrowRight from "./icons/arrowRight.svg"

const TitleRow = ({ normalText, coloredText }) => {
  return (
    <div className="title_row top">
      <p className="title">
        <span className="normal_text">{normalText}</span>
        <span className="color_text"> {coloredText}</span>
      </p>
      <a className="all" href="#">
        All
        <img src={arrowRight} alt="arrow right icon" />
      </a>
    </div>
  )
}

export default TitleRow
