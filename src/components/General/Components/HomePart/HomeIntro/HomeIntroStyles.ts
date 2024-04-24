import styled from "styled-components";
import { first_color, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../../GlobalStyles";
import { ITextProps } from "./interface";

export const IntroContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${white_color};

  @media ${tablet_screen} {
    width: 90%;
    margin: 0 0 60px 0;
  }

  @media ${small_tablet_screen} {
    width: 90%;
  }

  @media ${mobile_screen} {
    width: 90%;
    height: 400px;
    margin: 50px 0 0 0;
  }
`

export const StyledText = styled.p<ITextProps>`
  color: ${white_color};
  margin: ${props => props.margin || '0'};
  font-size: ${props => props.size || '28px'};
  font-weight: ${props => props.weight || '400'};

  & span {
    color: ${first_color};
  }
`