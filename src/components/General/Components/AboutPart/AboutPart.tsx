import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { Container } from "../../../../styledTags/Container/Container"
import NavigationItem from "../../../../styledTags/NavigationItem/NavigationItem"
import { AboutContainer, InfoContainer, PersonalInfo, Photo, StyledLink, Title } from "./AboutPartStyles"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithubSquare } from "react-icons/fa"

const AboutPart = () => {
  const linkedin = import.meta.env.VITE_LINK_URL;
  const facebook = import.meta.env.VITE_FACE_URL;
  const github = import.meta.env.VITE_GIT_URL;

  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  return (
    <AboutContainer>
      <Container align={windowWidth > 998 ? "flex-end" : "center"} justify="center" wrap="wrap" direction={windowWidth > 768 ? "row" : "column"}>
        <InfoContainer>
          <Photo src="/media/iphone_avatar.png" alt="iphone_avatar" />
          <PersonalInfo>
            <span>{t("aboutPart.name")}</span>
            <Container justify="space-around" margin="0">
              <StyledLink href={github} target="blank"><FaGithubSquare size={30} /></StyledLink>
              <StyledLink href={linkedin} target="blank"><FaLinkedin size={30} /></StyledLink>
              <StyledLink href={facebook} target="blank"><FaFacebookSquare size={30} /></StyledLink>
            </Container>
          </PersonalInfo>
        </InfoContainer>
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
