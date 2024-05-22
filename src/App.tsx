import AboutPart from "./components/General/Components/AboutPart/AboutPart"
import Header from "./components/General/Components/Header/Header"
import Home from "./components/General/Components/HomePart/Home"
import SkillsList from "./components/General/Components/SkillsPart/SkillsList/SkillsList"
import { Wrapper } from "./styledTags/Wrapper/Wrapper"

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <AboutPart />
      <SkillsList />
    </Wrapper>
  )
}

export default App
