import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import NavigationItem from "../../../../styledTags/NavigationItem/NavigationItem"
import SkillsList from "./SkillsList/SkillsList"
import { SkillsContainer, Title } from "./SkillsPartStyles"


const SkillsPart = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <SkillsContainer>
      <Container direction="column" justify="center" align="center">
        <Container width="auto" direction="column" justify="center">
          <NavigationItem
            align="center"
            margin={windowWidth > 768 ? "0 0 30px 0" : "0 0 20px 0"}
            id="skills"
          >
            {t("skillsPart.navItem")}
          </NavigationItem>
          <Title>
            {t("skillsPart.title.firstPart")}
            <br />
            {t("skillsPart.title.secondPart")}
          </Title>
        </Container>
        <SkillsList delay={300} />
      </Container>
    </SkillsContainer>
  )
}

export default SkillsPart