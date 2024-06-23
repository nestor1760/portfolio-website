import { useLanguage } from "../../../../../hooks/useLanguage"
import { AnimatedItem, Image, ImageContainer } from "./HomeImgStyles"

const Robot = () => {
  const { t } = useLanguage()

  return (
    <ImageContainer>
      <AnimatedItem top="0" right="170px" delay="2.3s">{t("intro.animatedItem.firstItem")}</AnimatedItem>
      <AnimatedItem top="100px" left="-70px" delay="2.2s">{t("intro.animatedItem.secondItem")}</AnimatedItem>
      <AnimatedItem top="100px" right="-30px" delay="2.5s">{t("intro.animatedItem.thirdItem")}</AnimatedItem>
      <Image src="/media/robot.png" />
    </ImageContainer>
  )
}

export default Robot
