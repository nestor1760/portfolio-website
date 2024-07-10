import styled from "styled-components";
import { blue_color, gray_text, mobile_screen, small_tablet_screen, white_color } from "../../../GlobalStyles";

export const Title = styled.p<{ darkTheme: boolean }>`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${blue_color};
  cursor: pointer;
  transition: 0.3s;
  & >span {
    color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  }
  &:hover {
    color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
    & span {
      color: ${blue_color};
    }
  }

   @media ${small_tablet_screen} {
    font-size: 32px;
  }

  @media ${mobile_screen} {
    font-size: 28px;
  }
`