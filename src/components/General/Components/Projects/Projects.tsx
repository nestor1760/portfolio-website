import { MProjectTitle, MProjectsContainer, fadeIn, leftAnimation } from "../../../../animation"
import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import { MNavigationItem } from "../../../../styledTags/NavigationItem/NavigationItem"
import ProjectList from "./ProjectList/ProjectList"

const Projects = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <MProjectsContainer initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
      <Container width="auto" direction="column" justify="center">
        <MNavigationItem
          variants={fadeIn}
          custom={1}
          align="center"
          margin={windowWidth > 768 ? "50px 0 30px 0" : "50px 0 20px 0"}
          id="projects"
        >
          {t("projectsPart.navItem")}
        </MNavigationItem>
        <MProjectTitle variants={leftAnimation} custom={1}>{t("projectsPart.title")}</MProjectTitle>
      </Container>
      <ProjectList />
    </MProjectsContainer>
  )
}

export default Projects
