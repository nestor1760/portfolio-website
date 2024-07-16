import styled from "styled-components";
import { mobile_screen, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";
import { dropAndScale } from "../../../../animation";

export const HomeContainer = styled.section`
  width: 100%;
  height: 650px;
  padding: 15% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media ${tablet_screen} {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${small_tablet_screen} {
    width: 100%;
    height: 400px;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${mobile_screen} {
    width: 90%;
    height: 100%;
    margin: 50px 0 0 0;
  }
`

export const StyledArrow = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  animation: ${dropAndScale} 2s infinite;
`