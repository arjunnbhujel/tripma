import React from "react"
import "./Card.css"

const Card = ({
  className,
  image,
  titleName,
  location,
  price,
  description,
}) => {
  return (
    <div className={`card card_${className}`}>
      <img className="card_image" src={image} alt="Temple" />
      <div className="card_data">
        <div className="title_row">
          <p className="title">
            <span className="name">{titleName}, </span>
            <span className="location">{location}</span>
          </p>
          <p className="price">{price}</p>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default Card
