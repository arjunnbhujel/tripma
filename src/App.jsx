import "./App.css"
import Banner from "./components/Banner/Banner"
import Navigation from "./container/Navigation/Navigation"
import Header from "./container/Header/Header"
import FlightDeals from "./container/FlightDeals/FlightDeals"
import Stay from "./container/Stay/Stay"

const App = () => {
  return (
    <>
      <Banner />
      <Navigation />
      <Header />
      <FlightDeals />
      <Stay />
    </>
  )
}

export default App
