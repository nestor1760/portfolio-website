import { MFooterContainer, MLabel, rightAnimation } from "../../../../animation";
import { useNavMenu } from "../../../../hooks/useNavMenu";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import FooterList from "./FooterList/FooterList";

const Footer = () => {
  const title = '<<span>Nestor</span>/>';

  const { scrollToStart } = useNavMenu()
  const { windowWidth } = useWindowWidth()

  return (
    <MFooterContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {
        (windowWidth > 590) && (
          <MLabel variants={rightAnimation} custom={0.5} dangerouslySetInnerHTML={{ __html: title }} onClick={scrollToStart} />
        )
      }
      <FooterList />
    </MFooterContainer>
  )
}

export default Footer