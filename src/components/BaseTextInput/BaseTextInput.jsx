import React, { useState } from "react"
import "./BaseTextInput.css"

const BaseTextInput = ({ placeholder, iconSource }) => {
  const [value, setValue] = useState("")

  const handleText = (event) => {
    setValue(event.target.value)
  }
  return (
    <div className="base-text-input">
      <img className="icon" alt="departure" src={iconSource} />
      <input
        className="label"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleText}
      />
    </div>
  )
}

export default BaseTextInput
