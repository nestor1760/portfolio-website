import { AnimatedItem, Image, ImageContainer } from "./HomeImgStyles"

const Robot = () => {
  return (
    <ImageContainer>
      <AnimatedItem top="0" right="170px" delay="2.3s">Modern</AnimatedItem>
      <AnimatedItem top="100px" left="-70px" delay="2.2s">Responsive</AnimatedItem>
      <AnimatedItem top="100px" right="-30px" delay="2.5s">Interactive</AnimatedItem>
      <Image src="/public/media/robot.png" />
    </ImageContainer>
  )
}

export default Robot
