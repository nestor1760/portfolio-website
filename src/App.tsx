import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Wrapper } from "./styledTags/Wrapper"

function App() {
  return (
    <Wrapper>
      <Header />
      <HomePage />
      <Footer />
    </Wrapper>
  )
}

export default App
