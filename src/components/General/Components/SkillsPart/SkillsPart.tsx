import { MSkillsContainer, MSkillsTitle, fadeIn, leftAnimation } from "../../../../animation"
import { dataSkills } from "../../../../data/dataSkills"
import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import { MNavigationItem } from "../../../../styledTags/NavigationItem/NavigationItem"
import SkillsList from "./SkillsList/SkillsList"

const SkillsPart = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <MSkillsContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Container direction="column" justify="center" align="center">
        <Container width="auto" direction="column" justify="center">
          <MNavigationItem
            variants={fadeIn}
            custom={1}
            align="center"
            margin={windowWidth > 768 ? "0 0 30px 0" : "0 0 20px 0"}
            id="skills"
          >
            {t("skillsPart.navItem")}
          </MNavigationItem>
          <MSkillsTitle variants={leftAnimation} custom={1}>
            {t("skillsPart.title.firstPart")}
            <br />
            {t("skillsPart.title.secondPart")}
          </MSkillsTitle>
        </Container>
        <SkillsList data={dataSkills} />
      </Container>
    </MSkillsContainer>
  )
}

export default SkillsPart