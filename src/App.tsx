import { Route, Routes } from "react-router-dom"
import { Wrapper } from "./styledTags/Wrapper/Wrapper"
import Layout from "./components/General/Components/Layout/Layout"
import PrivacyPolicy from "./components/General/Components/PrivacyPolicy/PrivacyPolicy"

function App() {
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
