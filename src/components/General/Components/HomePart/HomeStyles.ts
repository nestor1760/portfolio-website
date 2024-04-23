import styled from "styled-components";
import { small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const HomeContainer = styled.section`
  width: 100%;
  height: 650px;
  display: flex;
  padding: 20% 0 0 0;
  align-items: center;
  justify-content: space-around;

  @media ${tablet_screen} {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  @media ${small_tablet_screen} {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`