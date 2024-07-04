import { useNavigate } from "react-router-dom";
import { MHeader, MPrivacyBox, downAnimation, rightAnimation } from "../../../../animation";
import { MButton } from "../../../UI/StyledButton/StyledButton";
import { useLanguage } from "../../../../hooks/useLanguage";
import { FaArrowLeft } from "react-icons/fa6";
import { ItemBox, PPText, PPTitle, Title, TitleText } from "./PPStyles";
import Select from "../../../UI/Select/Select";
import { GeneralTitle } from "../../../../GlobalStyles";
import { useNavMenu } from "../../../../hooks/useNavMenu";


const PrivacyPolicy = () => {
  const navigate = useNavigate()
  const { language, handleLanguage, t } = useLanguage()
  const { scrollToStart } = useNavMenu()

  return (
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
      <TitleText>Title</TitleText>
      <ItemBox>
        <PPTitle>1. Test Title</PPTitle>
        <PPText>1.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore iure nam, est similique cumque voluptate, nobis, aspernatur dolor accusantium perferendis delectus blanditiis error hic repellat. Laudantium iure voluptatum aliquam accusamus?</PPText>
        <PPText>2.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore iure nam, est similique cumque voluptate, nobis, aspernatur dolor accusantium perferendis delectus blanditiis error hic repellat. Laudantium iure voluptatum aliquam accusamus?</PPText>
        <PPText>3.1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore iure nam, est similique cumque voluptate, nobis, aspernatur dolor accusantium perferendis delectus blanditiis error hic repellat. Laudantium iure voluptatum aliquam accusamus?</PPText>
      </ItemBox>

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
  )
}

export default PrivacyPolicy