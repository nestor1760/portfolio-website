import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../HomePart/Home'
import AboutPart from '../AboutPart/AboutPart'
import SkillsPart from '../SkillsPart/SkillsPart'
import Projects from '../Projects/Projects'
import { ProgressBar } from '../../../UI/ProgressBar/ProgressBar'


const Layout = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <Home />
      <AboutPart />
      <SkillsPart />
      <Projects />
      <Footer />
    </>
  )
}

export default Layout