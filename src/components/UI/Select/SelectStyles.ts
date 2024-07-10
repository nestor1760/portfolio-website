import styled from "styled-components";
import { dark_back_color, blue_color, white_color, gray_text } from "../../../GlobalStyles";

export const StyledSelect = styled.select<{ darkTheme: boolean }>`
  outline: none;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  margin: 0 20px 0 0;
  cursor: pointer;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }

  & option {
    color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
    background: ${({ darkTheme }) => (darkTheme ? dark_back_color : white_color)};
  }
`

