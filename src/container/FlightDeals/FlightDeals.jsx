import React from "react"
import "./FlightDeals.css"
import Card from "../../components/Card/Card"
import TitleRow from "../../components/TitleRow/TitleRow"
// Images Import
import kodaiji from "./image/kodaiji_temple.png"
import bund from "./image/the_bund.jpeg"
import tasova from "./image/tasova_east_national_park.jpeg"
import sydney from "./image/sydney_opera_house.jpeg"
// Icon Import

const FlightDeals = () => {
  const kodaijiDetails = {
    className: "kodaji",
    image: kodaiji,
    titleName: "Kōdaiji Temple",
    location: "Kyoto",
    price: "$633",
    description: "Step back in time in the Gion district",
  }

  const sydneyDetails = {
    className: sydney,
    image: sydney,
    titleName: "Sydney Opera House",
    location: "Sydney",
    price: "$981",
    description: "Take a stroll along the famous harbor",
  }

  const bundDetails = {
    className: "bund",
    image: bund,
    titleName: "The Bund",
    location: "Shanghai",
    price: "$598",
    description: "China’s most international city",
  }

  const tasovaDetails = {
    className: "tasova",
    image: tasova,
    titleName: "Tsavo East National Park",
    location: "Kenya",
    price: "$1,248",
    description:
      "Named after the Tsavo River, and opened in April 1984, Tsavo East National Park is one of the oldest parks in Kenya. It is located in the semi-arid Taru Desert.",
  }

  return (
    <div className="deals_section">
      <TitleRow
        normalText={"Find your next adventure with these "}
        coloredText={"flight deals"}
      />

      <div className="deals">
        <Card
          className={kodaijiDetails.className}
          image={kodaijiDetails.image}
          titleName={kodaijiDetails.titleName}
          location={kodaijiDetails.location}
          price={kodaijiDetails.price}
          description={kodaijiDetails.description}
        />
        <Card
          className={bundDetails.className}
          image={bundDetails.image}
          titleName={bundDetails.titleName}
          location={bundDetails.location}
          price={bundDetails.price}
          description={bundDetails.description}
        />
        <Card
          className={sydneyDetails.className}
          image={sydneyDetails.image}
          titleName={sydneyDetails.titleName}
          location={sydneyDetails.location}
          price={sydneyDetails.price}
          description={sydneyDetails.description}
        />
        <Card
          className={tasovaDetails.className}
          image={tasovaDetails.image}
          titleName={tasovaDetails.titleName}
          location={tasovaDetails.location}
          price={tasovaDetails.price}
          description={tasovaDetails.description}
        />
      </div>
    </div>
  )
}

export default FlightDeals
