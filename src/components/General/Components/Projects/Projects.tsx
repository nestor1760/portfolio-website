import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import NavigationItem from "../../../../styledTags/NavigationItem/NavigationItem"
import ProjectList from "./ProjectList/ProjectList"
import { ProjectsContainer, Title } from "./ProjectsStyles"

const Projects = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <ProjectsContainer>
      <Container width="auto" direction="column" justify="center">
        <NavigationItem
          align="center"
          margin={windowWidth > 768 ? "50px 0 30px 0" : "50px 0 20px 0"}
          id="projects"
        >
          {t("projectsPart.navItem")}
        </NavigationItem>
        <Title>{t("projectsPart.title")}</Title>
      </Container>
      <ProjectList />
    </ProjectsContainer>
  )
}

export default Projects