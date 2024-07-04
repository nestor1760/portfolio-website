import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../HomePart/Home'
import AboutPart from '../AboutPart/AboutPart'
import SkillsPart from '../SkillsPart/SkillsPart'
import Projects from '../Projects/Projects'


const Layout = () => {
  return (
    <>
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