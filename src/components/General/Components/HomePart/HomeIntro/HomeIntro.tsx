import { useEffect } from "react"
import { useLanguage } from "../../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../../hooks/useWindowWidth"
import { AnimatedLetter, BtnContainer, IntroContainer, StyledText } from "./HomeIntroStyles"
import { useAppDispatch, useAppSelector } from "../../../../../hook"
import { setShow } from "../../../../../store/modalSlice"
import Modal from "../../../../UI/Modal/Modal"
import Contact from "../../Contact/Contact"
import IntroUtills from "./utills"
import { MButton } from "../../../../UI/StyledButton/StyledButton"
import { MStyledText, upAnimation, leftAnimation } from "../../../../../animation"
import { MdOutlineFileDownload } from "react-icons/md";
import { blue_color, white_color } from "../../../../../GlobalStyles"

const HomeIntro = () => {
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()
  const { show } = useAppSelector(state => state.modal)
  const { switcher } = useAppSelector(state => state.switcher)
  const dispatch = useAppDispatch()
  const { animatedString, letters } = IntroUtills()

  const sizeTitle = windowWidth > 889 ? '28px' : '22px';
  const sizeName = windowWidth > 889 ? '40px' : '30px';
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
      <IntroContainer darkTheme={switcher} id="home">
        <StyledText
          size={sizeTitle}
          margin="0 0 10px 0"
          weight="600"
        >
          {t("intro.greeting")}
        </StyledText>
        <div style={{ display: 'flex', height: '90px' }}>
          <StyledText size={sizeName} margin="0 0 30px 0" weight="600">
            {letters.map((char, index) =>
              <AnimatedLetter key={index}>{char === ' ' ? '\u00A0' : char}</AnimatedLetter>
            )}
          </StyledText>
        </div>
        <MStyledText
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={leftAnimation}
          custom={12}
          size={sizeText}
          margin="0 0 50px 0"
          weight="600"
        >
          {t("intro.description.firstPart")}<span> {t("intro.description.span")}</span> <br />{t("intro.description.secondPart")}
        </MStyledText>
        <BtnContainer>
          <MButton
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={upAnimation}
            custom={12}
            onClick={showModal}
            height="44px"
            hoverBack="transparent"
            hoverColor={blue_color}
            margin={windowWidth > 480 ? '0 10px 0 0' : '0 0 15px 0'}
            hoverBorder={`2px solid ${blue_color}`}
          >
            {t("intro.button")}
          </MButton>
          <MButton
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={upAnimation}
            custom={14}
            height="44px"
            color={blue_color}
            background={white_color}
            hoverBack='transparent'
            hoverBorder={`2px solid ${blue_color}`}
          >
            {t("intro.downloadButton")}
            <MdOutlineFileDownload size={30} />
          </MButton>
        </BtnContainer>
      </IntroContainer>
      <Modal show={show}>
        <Contact />
      </Modal>
    </>
  )
}

export default HomeIntro