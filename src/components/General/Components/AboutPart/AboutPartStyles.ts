import styled from "styled-components";
import { first_color, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const AboutContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 156px 0 172px 0;
  color: white;

  @media ${tablet_screen} {
    margin-top: 20px;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    margin-top: 20px;
  }
`

export const Photo = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
  margin: 0 34px 0 0;

  @media ${small_tablet_screen} {
    margin: 0 0 30px 0;
  }
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: ${first_color};

  @media ${tablet_screen} {
    font-size: 28px;
  }

  @media ${small_tablet_screen} {
    font-size: 24px;
  }
`