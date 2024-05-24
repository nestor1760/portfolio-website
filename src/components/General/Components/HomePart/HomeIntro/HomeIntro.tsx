import { useLanguage } from "../../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../../hooks/useWindowWidth"
import ContactBtn from "../../../../UI/ContactBtn/ContactBtn"
import { IntroContainer, StyledText } from "./HomeIntroStyles"

const HomeIntro = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()

  const sizeTitle = windowWidth > 889 ? '28px' : '22px';
  const sizeName = windowWidth > 889 ? '40px' : '32px';
  const sizeText = windowWidth > 889 ? '24px' : '18px';

  return (
    <IntroContainer id="home">
      <StyledText size={sizeTitle} margin="0 0 10px 0" weight="600">{t("intro.greeting")}</StyledText>
      <StyledText size={sizeName} margin="0 0 30px 0" weight="600">{t("intro.name")}</StyledText>
      <StyledText size={sizeText} margin="0 0 50px 0" weight="600">
        {t("intro.description.firstPart")}<span> {t("intro.description.span")}</span> <br />{t("intro.description.secondPart")}
      </StyledText>
      <ContactBtn width="190px" height="44px">{t("intro.button")}</ContactBtn>
    </IntroContainer>
  )
}

export default HomeIntro