import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import Home from '../HomePart/Home'
// import AboutPart from '../AboutPart/AboutPart'
// import SkillsPart from '../SkillsPart/SkillsPart'
// import Projects from '../Projects/Projects'
import Loader from '../../../UI/Loader/Loader';
import { ProgressBar } from '../../../UI/ProgressBar/ProgressBar'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../HomePart/Home'));
const AboutPart = lazy(() => import('../AboutPart/AboutPart'));
const SkillsPart = lazy(() => import('../SkillsPart/SkillsPart'));
const Projects = lazy(() => import('../Projects/Projects'));


const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <ProgressBar />
        <Home />
        <AboutPart />
        <SkillsPart />
        <Projects />
      </Suspense>
      <Footer />
    </>
  )
}

export default Layout