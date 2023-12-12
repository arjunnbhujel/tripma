import React from "react"
import "./Testimonial.css"

import Review from "../../components/Review/Review"

import kaori from "./Image/1.png"
import yifei from "./Image/2.png"
import anthony from "./Image/3.png"

const Testimonial = () => {
  const userDetail1 = {
    img: kaori,
    name: "Kaori Yamaguchi",
    location: `Honolulu, Hawaii`,
    date: "February 2017",
    rating: 4,
    review:
      "My family and I visit Hawaii every year, and we usually book our flights using other services. Tripma was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and",
  }

  const userDetail2 = {
    img: yifei,
    name: "Yifei Chen",
    location: `Seoul, South Korea `,
    date: "April 2019",
    rating: 5,
    review:
      "What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me",
  }

  const userDetail3 = {
    img: anthony,
    name: "Anthony Lewis",
    location: `Berlin, Germany`,
    date: "April 2019",
    rating: 5,
    review:
      "When I was looking to book my flight to Berlin from LAX, Tripma had the best browsing experiece so I figured I’d give it a try. It was my first time using Tripma, but I’d definitely recommend it to a friend and use it for",
  }

  return (
    <div className="testimonial">
      <p className="testimonial_top">
        What <span className="tripma">Tripma</span> users are saying
      </p>
      <div className="review">
        <Review
          userAvatar={userDetail1.img}
          userName={userDetail1.name}
          userLocation={userDetail1.location}
          userDate={userDetail1.date}
          userRating={userDetail1.rating}
          userReview={userDetail1.review}
        />
        <Review
          userAvatar={userDetail2.img}
          userName={userDetail2.name}
          userLocation={userDetail2.location}
          userDate={userDetail2.date}
          userRating={userDetail2.rating}
          userReview={userDetail2.review}
        />
        <Review
          userAvatar={userDetail3.img}
          userName={userDetail3.name}
          userLocation={userDetail3.location}
          userDate={userDetail3.date}
          userRating={userDetail3.rating}
          userReview={userDetail3.review}
        />
      </div>
    </div>
  )
}

export default Testimonial
