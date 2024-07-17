import { useNavigate } from "react-router-dom";
import { MHeader, MPrivacyBox, MTitleText, downAnimation, rightAnimation } from "../../../../animation";
import { MButton } from "../../../UI/StyledButton/StyledButton";
import { useLanguage } from "../../../../hooks/useLanguage";
import { FaArrowLeft } from "react-icons/fa6";
import Select from "../../../UI/Select/Select";
import { IPrivacy } from "./interface";
import { MPrivacyItem } from "./PrivacyItem/PrivacyItem";
// import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Modal from "../../../UI/Modal/Modal";
import { useAppSelector } from "../../../../hook";
// import { ProgressBar } from "../../../UI/ProgressBar/ProgressBar";
// import { Switcher } from "../../../UI/ThemeSwitcher/ThemeSwitcher";
// import { Container } from "../../../../styledTags/Container/Container";
// import TitleLabel from "../../../UI/Title/TitleLabel";
import { blue_color, gray_text, white_color } from "../../../../GlobalStyles";
import { lazy, Suspense } from "react";
import Loader from "../../../UI/Loader/Loader";

const ProgressBar = lazy(() => import("../../../UI/ProgressBar/ProgressBar").then(module => ({ default: module.ProgressBar })));
const Switcher = lazy(() => import("../../../UI/ThemeSwitcher/ThemeSwitcher").then(module => ({ default: module.Switcher })));
const Container = lazy(() => import("../../../../styledTags/Container/Container").then(module => ({ default: module.Container })));
const TitleLabel = lazy(() => import("../../../UI/Title/TitleLabel").then(module => ({ default: module.MTitleLabel })));
const Footer = lazy(() => import("../Footer/Footer"));


const PrivacyPolicy = () => {
  const navigate = useNavigate()
  const { language, handleLanguage, t } = useLanguage()
  const { show } = useAppSelector(state => state.modal)
  const { switcher } = useAppSelector(state => state.switcher)
  const descriptions = t("privacyPolicy.description", { returnObjects: true }) as IPrivacy[];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <ProgressBar />
        <MPrivacyBox initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
          <MHeader darkTheme={switcher} variants={downAnimation} custom={1}>
            <TitleLabel />
            <Container margin="0" align="center">
              <Switcher />
              <Select
                value={language}
                onChange={handleLanguage}
                options={[
                  { value: 'en' },
                  { value: 'pl' },
                  { value: 'ua' },
                ]}
              />
            </Container>
          </MHeader>
          <MTitleText darkTheme={switcher} variants={rightAnimation} custom={0.5}>{t('privacyPolicy.title')}</MTitleText>
          <p style={{ color: switcher ? white_color : gray_text }}>{t('privacyPolicy.lastUpdate')} 06.07.2024</p>
          {descriptions.map((item, index) =>
            <MPrivacyItem item={item} key={item.id} variants={rightAnimation} custom={index} />
          )}
          <MButton
            variants={rightAnimation}
            custom={1}
            height="44px"
            margin='30px 0'
            onClick={() => navigate('/')}
            hoverBorder={switcher ? 'none' : `2px solid ${blue_color}`}
          >
            <FaArrowLeft style={{ marginRight: '5px' }} />{t('privacyPolicy.btnLabel')}
          </MButton>
        </MPrivacyBox>
        <Footer />
      </Suspense>
      <Modal show={show}>
        <Contact />
      </Modal>
    </>
  )
}

export default PrivacyPolicy
