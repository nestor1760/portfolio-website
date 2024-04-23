import { useWindowWidth } from "../../../../../hooks/useWindowWidth"
import ContactBtn from "../../../../UI/ContactBtn/ContactBtn"
import { IntroContainer, StyledText } from "./HomeIntroStyles"

const HomeIntro = () => {
  const { windowWidth } = useWindowWidth()

  const sizeTitle = windowWidth > 889 ? '28px' : '24px';
  const sizeName = windowWidth > 889 ? '40px' : '32px';
  const sizeText = windowWidth > 889 ? '24px' : '20px';

  return (
    <IntroContainer>
      <StyledText size={sizeTitle} margin="0 0 10px 0" weight="600">Hi, I'm</StyledText>
      <StyledText size={sizeName} margin="0 0 30px 0" weight="600">Roman Nesterchuk</StyledText>
      <StyledText size={sizeText} margin="0 0 50px 0" weight="600">
        I am a young and ambitious <span>Frontend Developer.</span> <br />My goal is to create impressive and innovative web applications.
      </StyledText>
      <ContactBtn width="190px" height="44px">Contact me</ContactBtn>
    </IntroContainer>
  )
}

export default HomeIntro