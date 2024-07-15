import { Route, Routes, useLocation } from "react-router-dom"
import { Wrapper } from "./styledTags/Wrapper/Wrapper"
import Layout from "./components/General/Components/Layout/Layout"
import PrivacyPolicy from "./components/General/Components/PrivacyPolicy/PrivacyPolicy"
import { useEffect } from "react"
import ReactGA from 'react-ga4'

function App() {
  const { pathname } = useLocation()
  const TRACKING_ID = import.meta.env.VITE_PRIVATE_GOOGLE_ID

  // useEffect(() => {
  //   ReactGA.initialize(TRACKING_ID)
  //   ReactGA.send({ hitType: "pageview", page: pathname, title: "Home page" })
  // }, [])

  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send({ hitType: "pageview", page: pathname, title: document.title });
    } else {
      console.error("Google Analytics Measurement ID is missing.");
    }
  }, [pathname, TRACKING_ID]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Wrapper>
  )
}

export default App
