import styled from "styled-components";
import { small_tablet_screen, tablet_screen } from "../../../../../GlobalStyles";

export const FlexContainer = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 20px 0;

  @media ${tablet_screen} {
    justify-content: center;
  }
  
  @media ${small_tablet_screen} {
    justify-content: center;
  }
`
