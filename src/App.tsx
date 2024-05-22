import AboutPart from "./components/General/Components/AboutPart/AboutPart"
import Header from "./components/General/Components/Header/Header"
import Home from "./components/General/Components/HomePart/Home"
import SkillsPart from "./components/General/Components/SkillsPart/SkillsPart"
import { Wrapper } from "./styledTags/Wrapper/Wrapper"

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <AboutPart />
      <SkillsPart />
    </Wrapper>
  )
}

export default App
