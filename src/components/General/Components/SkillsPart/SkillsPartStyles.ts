import styled from "styled-components";
import { blue_color, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const SkillsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media ${tablet_screen} {
    margin-top: 20px;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    margin-top: 20px;
    padding: 0 5px;
  }
`

export const SkillsTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 40px 0;
  text-align: center;
  color: ${blue_color};

  @media ${tablet_screen} {
    font-size: 28px;
  }

  @media ${small_tablet_screen} {
    font-size: 22px;
  }
`