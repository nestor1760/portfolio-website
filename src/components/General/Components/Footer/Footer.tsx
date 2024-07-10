import { gray_text, white_color } from "../../../../GlobalStyles";
import { MFooterContainer, MPPContainer, rightAnimation, upAnimation } from "../../../../animation";
import { useAppSelector } from "../../../../hook";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { MTitleLabel } from "../../../UI/Title/TitleLabel";
import FooterList from "./FooterList/FooterList";
import { FooterMenu, StyledLink } from "./FooterStyles";

const Footer = () => {
  const { t } = useLanguage()
  const { windowWidth } = useWindowWidth()
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <MFooterContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      darkTheme={switcher}
    >
      <FooterMenu>
        {
          (windowWidth > 590) && (
            <MTitleLabel
              variants={rightAnimation}
              custom={0.5}
            />
          )
        }
        <FooterList />
      </FooterMenu>
      <MPPContainer variants={upAnimation} custom={1} darkTheme={switcher}>
        <StyledLink
          style={{ color: switcher ? white_color : gray_text }}
          to="/privacy-policy"
        >
          {t("footer.title")}
        </StyledLink>
        <p>&copy; 2024 {t("footer.text")}</p>
      </MPPContainer>
    </MFooterContainer>
  )
}

export default Footer