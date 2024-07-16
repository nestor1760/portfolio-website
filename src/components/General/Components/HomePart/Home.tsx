import { blue_color } from "../../../../GlobalStyles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import Robot from "./HomeImg/HomeImg"
import HomeIntro from "./HomeIntro/HomeIntro"
import { HomeContainer, StyledArrow } from "./HomeStyles"
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  const { windowWidth } = useWindowWidth()

  return (
    <HomeContainer>
      <HomeIntro />
      <Robot />
      {windowWidth > 1110 && (
        <StyledArrow>
          <FaArrowDown size={35} color={blue_color} />
        </StyledArrow>
      )}
    </HomeContainer>
  )
}

export default Home