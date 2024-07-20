import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loader from '../../../UI/Loader/Loader';
import { ProgressBar } from '../../../UI/ProgressBar/ProgressBar';
import { lazy, Suspense } from 'react';
import Section from './Section';
import Cookie from '../Cookie/Cookie';

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
        <Section id="home">
          <Home />
        </Section>
        <Section id="about_me">
          <AboutPart />
        </Section>
        <Section id="skills">
          <SkillsPart />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
      </Suspense>
      <Cookie />
      <Footer />
    </>
  );
}

export default Layout;
