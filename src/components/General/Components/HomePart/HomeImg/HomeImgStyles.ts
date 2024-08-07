import styled, { keyframes } from "styled-components";
import { blue_color, dark_gradient, light_gradient, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../../GlobalStyles";
import { IAnimatedItem } from "./interface";

export const ImageContainer = styled.div`
  width: 455px;
  height: 605px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 318px;
    height: 325px;
    background-color: ${blue_color};
    filter: blur(50px);
    border-radius: 50%;
    right: 110px;
    top: 100px;
    z-index: 0;
  }

  @media ${tablet_screen} {
    width: 555px;
    height: 500px;
    justify-content: center;
  }

  @media ${small_tablet_screen} {
    display: none;
  }

  @media ${mobile_screen} {
    display: none;
  }
`

const upAndDownAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const AnimatedItem = styled.div<IAnimatedItem>`
  width: 220px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white_color};
  font-size: 24px;
  position: absolute;
  overflow: hidden;
  border: 1.5px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  animation: ${upAndDownAnimation} ${props => props.delay || '1s'} ease-in-out infinite;
  transition: 0.250ms;
  top: ${props => props.top || 'auto'}; 
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`

export const Image = styled.img`
  width: 507px;
  object-fit: cover;
  z-index: 1;

  @media ${tablet_screen} {
    width: 400px;
    margin: 40px 0 0 0;
  }
`