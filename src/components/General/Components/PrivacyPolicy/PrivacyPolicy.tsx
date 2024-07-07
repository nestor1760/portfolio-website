import { useNavigate } from "react-router-dom";
import { MHeader, MPrivacyBox, MTitleText, downAnimation, rightAnimation } from "../../../../animation";
import { MButton } from "../../../UI/StyledButton/StyledButton";
import { useLanguage } from "../../../../hooks/useLanguage";
import { FaArrowLeft } from "react-icons/fa6";
import { Title } from "./PPStyles";
import Select from "../../../UI/Select/Select";
import { GeneralTitle } from "../../../../GlobalStyles";
import { useNavMenu } from "../../../../hooks/useNavMenu";
import { IPrivacy } from "./interface";
import { MPrivacyItem } from "./PrivacyItem/PrivacyItem";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
import Modal from "../../../UI/Modal/Modal";
import { useAppSelector } from "../../../../hook";
import { ProgressBar } from "../../../UI/ProgressBar/ProgressBar";


const PrivacyPolicy = () => {
  const navigate = useNavigate()
  const { language, handleLanguage, t } = useLanguage()
  const { scrollToStart } = useNavMenu()
  const { show } = useAppSelector(state => state.modal)
  const descriptions = t("privacyPolicy.description", { returnObjects: true }) as IPrivacy[];

  return (
    <>
      <ProgressBar />
      <MPrivacyBox initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
        <MHeader variants={downAnimation} custom={1}>
          <Title dangerouslySetInnerHTML={{ __html: GeneralTitle }} onClick={scrollToStart} />
          <Select
            value={language}
            onChange={handleLanguage}
            options={[
              { value: 'en' },
              { value: 'pl' },
              { value: 'ua' },
            ]}
          />
        </MHeader>
        <MTitleText variants={rightAnimation} custom={0.5}>{t('privacyPolicy.title')}</MTitleText>
        <p>{t('privacyPolicy.lastUpdate')} 06.07.2024</p>
        {descriptions.map((item, index) =>
          <MPrivacyItem item={item} key={item.id} variants={rightAnimation} custom={index} />
        )}
        <MButton
          variants={rightAnimation}
          custom={1}
          height="44px"
          margin='30px 0'
          onClick={() => navigate('/')}
        >
          <FaArrowLeft style={{ marginRight: '5px' }} />{t('privacyPolicy.btnLabel')}
        </MButton>
      </MPrivacyBox>
      <Footer />
      <Modal show={show}>
        <Contact />
      </Modal>
    </>
  )
}

export default PrivacyPolicy
