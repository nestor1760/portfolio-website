import styled, { keyframes } from "styled-components";
import { blue_color, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../../GlobalStyles";
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
    color: ${blue_color};
  }
`

const elevateAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const AnimatedLetter = styled.span`
  display: inline-block;
  animation: ${elevateAnimation} 200ms ease-in;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  @media ${mobile_screen} {
    align-items: flex-start;
    flex-direction: column;
  }
`
