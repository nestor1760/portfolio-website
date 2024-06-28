import styled from "styled-components";
import { first_color, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const ProjectsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  margin-top: 50px;


  @media ${tablet_screen} {
    margin-top: 20px;
    justify-content: start;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    align-items: start;
    margin-top: 20px;
    padding: 0 5px;
  }
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 40px 0;
  text-align: center;
  color: ${first_color};

  @media ${tablet_screen} {
    font-size: 28px;
  }

  @media ${small_tablet_screen} {
    font-size: 22px;
  }
`