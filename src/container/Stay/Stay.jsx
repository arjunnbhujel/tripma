import React from "react"
import "./Stay.css"
import TitleRow from "../../components/TitleRow/TitleRow"
import Card from "../../components/Card/Card"

// Image Import
import maldives from "./image/maldives.jpeg"
import mongolia from "./image/mongolia.jpeg"
import morocco from "./image/morocco.jpeg"

const Stay = () => {
  const maldivesDetails = {
    className: "maldives",
    image: maldives,
    titleName: "Stay among the atolls in ",
    location: "Maldives",
    price: "",
    description:
      "From the 2nd century AD, the islands were known as the 'Money Isles' due to the abundance of cowry shells, a currency of the early ages.",
  }
  const mongoliaDetails = {
    className: "mongolia",
    image: mongolia,
    titleName: "Live traditionally in ",
    location: "Mongolia",
    price: "",
    description:
      "Traditional Mongolian yurts consists of an angled latticework of wood or bamboo for walls, ribs, and a wheel.",
  }
  const moroccoDetails = {
    className: "morocco",
    image: morocco,
    titleName: "Experience the Ourika Valley in ",
    location: "Morocco",
    price: "",
    description:
      "Morocco’s Hispano-Moorish architecture blends influences from Berber culture, Spain, and contemporary artistic currents in the Middle East.",
  }

  return (
    <div className="stay">
      <TitleRow normalText={"Explore unique "} coloredText={"places to stay"} />
      <div className="stay_card">
        <Card
          className={maldivesDetails.className}
          image={maldivesDetails.image}
          titleName={maldivesDetails.titleName}
          location={maldivesDetails.location}
          price={maldivesDetails.price}
          description={maldivesDetails.description}
        />
        <Card
          className={moroccoDetails.className}
          image={moroccoDetails.image}
          titleName={moroccoDetails.titleName}
          location={moroccoDetails.location}
          price={moroccoDetails.price}
          description={moroccoDetails.description}
        />
        <Card
          className={mongoliaDetails.className}
          image={mongoliaDetails.image}
          titleName={mongoliaDetails.titleName}
          location={mongoliaDetails.location}
          price={mongoliaDetails.price}
          description={mongoliaDetails.description}
        />
      </div>
    </div>
  )
}

export default Stay
