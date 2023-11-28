import React from "react"
import "./Review.css"

import starIcon from "./Icon/star-filled.svg"

const Review = ({
  userAvatar,
  userName,
  userLocation,
  userDate,
  userRating,
  userReview,
}) => {
  const starNumber = []
  const star = () => {
    for (let i = 0; i < userRating; i++) {
      starNumber.push(<img src={starIcon} key={i} />)
    }
    return starNumber
  }

  return (
    <div className="review_card">
      <img className="avatar_image" src={userAvatar} alt="avatar" />

      <div className="text">
        <div className="user_data">
          <p className="name">{userName}</p>
          <p className="location_data">
            {userLocation} | {userDate}
          </p>
          <div className="rating">{star()}</div>
        </div>

        <p className="description_review">
          {userReview}
          <span className="read_more"> read more...</span>
        </p>
      </div>
    </div>
  )
}

export default Review
