import { MImageContainer, fadeIn } from "../../../../../animation"
import { useLanguage } from "../../../../../hooks/useLanguage"
import { AnimatedItem, Image } from "./HomeImgStyles"

const Robot = () => {
  const { t } = useLanguage()

  return (
    <MImageContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      variants={fadeIn}
      custom={1}
    >
      <AnimatedItem top="0" right="170px" delay="2.3s">{t("intro.animatedItem.firstItem")}</AnimatedItem>
      <AnimatedItem top="100px" left="-70px" delay="2.2s">{t("intro.animatedItem.secondItem")}</AnimatedItem>
      <AnimatedItem top="100px" right="-30px" delay="2.5s">{t("intro.animatedItem.thirdItem")}</AnimatedItem>
      <Image src="/media/robot.png" />
    </MImageContainer>
  )
}

export default Robot
