import { blue_color, gray_text } from "../../../../GlobalStyles";
import { useAppSelector } from "../../../../hook";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import Robot from "./HomeImg/HomeImg";
import HomeIntro from "./HomeIntro/HomeIntro";
import { HomeContainer, StyledArrow } from "./HomeStyles";
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  const { windowWidth } = useWindowWidth()
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <HomeContainer>
      <HomeIntro />
      <Robot />
      {windowWidth > 1110 && (
        <StyledArrow>
          <FaArrowDown size={35} color={switcher ? blue_color : gray_text} />
        </StyledArrow>
      )}
    </HomeContainer>
  )
}

export default Home