import Robot from "./HomeImg/HomeImg"
import HomeIntro from "./HomeIntro/HomeIntro"
import { HomeContainer } from "./HomeStyles"

const Home = () => {
  return (
    <HomeContainer>
      <HomeIntro />
      <Robot />
    </HomeContainer>
  )
}

export default Home