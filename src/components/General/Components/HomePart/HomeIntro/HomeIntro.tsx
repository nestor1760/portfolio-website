import { useEffect } from "react"
import { useLanguage } from "../../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../../hooks/useWindowWidth"
import { AnimatedLetter, IntroContainer, StyledText } from "./HomeIntroStyles"
import { useAppDispatch, useAppSelector } from "../../../../../hook"
import { setShow } from "../../../../../store/modalSlice"
import Modal from "../../../../UI/Modal/Modal"
import Contact from "../../Contact/Contact"
import IntroUtills from "./utills"
import ContactBtn from "../../../../UI/ContactBtn/ContactBtn"

const HomeIntro = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()
  const { show } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()
  const { animatedString, letters } = IntroUtills()

  const sizeTitle = windowWidth > 889 ? '28px' : '22px';
  const sizeName = windowWidth > 889 ? '40px' : '32px';
  const sizeText = windowWidth > 889 ? '24px' : '18px';

  const name = t("intro.name");

  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }

  useEffect(() => {
    const clearTimers = animatedString(name);
    return clearTimers;
  }, [name]);

  return (
    <>
      <IntroContainer id="home" >
        <StyledText size={sizeTitle} margin="0 0 10px 0" weight="600">{t("intro.greeting")}</StyledText>
        <div style={{ display: 'flex', height: '90px' }}>
          <StyledText size={sizeName} margin="0 0 30px 0" weight="600">
            {letters.map((char, index) =>
              <AnimatedLetter key={index}>{char === ' ' ? '\u00A0' : char}</AnimatedLetter>
            )}
          </StyledText>
        </div>
        <StyledText size={sizeText} margin="0 0 50px 0" weight="600">
          {t("intro.description.firstPart")}<span> {t("intro.description.span")}</span> <br />{t("intro.description.secondPart")}
        </StyledText>
        <ContactBtn width="190px" height="44px" onClick={showModal}>{t("intro.button")}</ContactBtn>
      </IntroContainer>
      <Modal show={show}>
        <Contact />
      </Modal>
    </>
  )
}

export default HomeIntro