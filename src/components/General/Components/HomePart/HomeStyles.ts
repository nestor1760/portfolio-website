import styled from "styled-components";
import { mobile_screen, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const HomeContainer = styled.article`
  width: 100%;
  height: 650px;
  display: flex;
  padding: 15% 0 0 0;
  align-items: center;
  justify-content: space-around;

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