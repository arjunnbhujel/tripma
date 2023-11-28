import "./App.css"
import Banner from "./components/Banner/Banner"
import Navigation from "./container/Navigation/Navigation"
import Header from "./container/Header/Header"
import FlightDeals from "./container/FlightDeals/FlightDeals"
import Stay from "./container/Stay/Stay"
import Button from "./components/Button/Button"
import Testimonial from "./container/Testimonial/Testimonial"
import Review from "./components/Review/Review"

const App = () => {
  return (
    <>
      <Banner />
      <Navigation />
      <Header />
      <FlightDeals />
      <Stay />
      <div className="center">
        <Button buttonText={"Explore more stays"} />
      </div>
      <Testimonial />

      {/* <Review /> */}
    </>
  )
}

export default App
