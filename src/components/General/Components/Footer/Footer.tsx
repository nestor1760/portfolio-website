import { GeneralTitle } from "../../../../GlobalStyles";
import { MFooterContainer, MLabel, MPPContainer, rightAnimation, upAnimation } from "../../../../animation";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useNavMenu } from "../../../../hooks/useNavMenu";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import FooterList from "./FooterList/FooterList";
import { FooterMenu, StyledLink } from "./FooterStyles";

const Footer = () => {
  const { t } = useLanguage()
  const { scrollToStart } = useNavMenu()
  const { windowWidth } = useWindowWidth()

  return (
    <MFooterContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <FooterMenu>
        {
          (windowWidth > 590) && (
            <MLabel
              variants={rightAnimation}
              custom={0.5}
              dangerouslySetInnerHTML={{ __html: GeneralTitle }}
              onClick={scrollToStart}
            />
          )
        }
        <FooterList />
      </FooterMenu>
      <MPPContainer variants={upAnimation} custom={1}>
        <StyledLink to="/privacy-policy">{t("footer.title")}</StyledLink>
        <p>&copy; 2024 {t("footer.text")}</p>
      </MPPContainer>
    </MFooterContainer>
  )
}

export default Footer