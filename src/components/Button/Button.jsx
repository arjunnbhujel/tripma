import React from "react"
import "./Button.css"

const Button = ({ buttonText }) => {
  return (
    <>
      <button className="button-small">{buttonText}</button>
    </>
  )
}

export default Button
