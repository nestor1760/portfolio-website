import styled from "styled-components"

const StyledContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 100px 0;
  padding: 0 10%;

  @media screen and (max-width: 1256px) {
    margin-top: 100px;
    flex-direction: column;
    padding: 20px 0;
  }
`

const InfoBlock = styled.div`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media screen and (max-width: 992px) {
    width: 80%;
  }
`

const TitleInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 20px;

  & h1 {
    font-weight: 800;
    font-size: 120px;
  }

  & p {
    font-size: 28px;
    font-weight: 800;
  }

  @media (min-width: 662px) and (max-width: 992px) {
    & h1 {
      font-weight: 800;
      font-size: 100px;
    }

    & p {
      font-size: 22px;
    }
  }

  @media (max-width: 661px) {
    & h1 {
      font-size: 83px;
    }

    & p {
      font-size: 18px;
    }
  }
`

const MainInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  & p {
    font-size: 16px;
    letter-spacing: 1.6px;
  }

  @media screen and (max-width: 992px) {
    & h2 {
      font-size: 28px;
    }
  }
`

const HomePage = () => {
  return (
    <StyledContainer>
      <InfoBlock>
        <TitleInfo>
          <h1>Fronted</h1>
          <p>Developer</p>
        </TitleInfo>
        <MainInfo>
          <h2>Hello!</h2>
          <h2>My name is Roman</h2>
          <p> I am a young and ambitious Frontend Developer. My goal is to create impressive and innovative web applications that not only meet the requirements of the modern user but also enhance the overall user experience.</p>
        </MainInfo>
      </InfoBlock>
      
    </StyledContainer>
  )
}

export default HomePage