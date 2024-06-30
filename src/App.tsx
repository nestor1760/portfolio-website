import AboutPart from "./components/General/Components/AboutPart/AboutPart"
// import Contact from "./components/General/Components/Contact/Contact"
import Header from "./components/General/Components/Header/Header"
import Home from "./components/General/Components/HomePart/Home"
import Projects from "./components/General/Components/Projects/Projects"
import SkillsPart from "./components/General/Components/SkillsPart/SkillsPart"
import { Wrapper } from "./styledTags/Wrapper/Wrapper"

function App() {
  return (
    <Wrapper>
      <Header />
      <Home />
      <AboutPart />
      <SkillsPart />
      <Projects />
    </Wrapper>
  )
}

export default App
