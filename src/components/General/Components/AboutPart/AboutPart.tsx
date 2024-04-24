import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import NavigationItem from "../../../../styledTags/NavigationItem/NavigationItem"
import { AboutContainer, Photo, Title } from "./AboutPartStyles"

const AboutPart = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <AboutContainer>
      <Container align={windowWidth > 998 ? "flex-end" : "center"} justify="center" wrap="wrap" direction={windowWidth > 768 ? "row" : "column"}>
        <Photo src="/public/media/iphone_avatar.png" alt="iphone_avatar" />
        <Container width={windowWidth > 768 ? "50%" : "90%"} margin="0" direction="column">
          <NavigationItem margin={windowWidth > 768 ? "0 0 30px 0" : "0 0 20px 0"} id="about_me">{t("aboutPart.navItem")}</NavigationItem>
          <Title>{t("aboutPart.slogan")}</Title>
          <p>{t("aboutPart.description")}</p>
        </Container>
      </Container>
    </AboutContainer>
  )
}

export default AboutPart