import styled from "styled-components"
import SkillsList from "./SkillsList"
import InfoPart from "./InfoBlock"
import AboutPart from "./AboutPart"

const HomeContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 10%;

  @media (max-width: 572px) {
    padding: 0 5%;
  }
`

const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <InfoPart />
        <AboutPart />
        <SkillsList />
      </HomeContainer>
      
    </>
  )
}

export default HomePage