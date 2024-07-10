import styled from "styled-components";
import { blue_color, gray_text, white_color } from "../../../../../GlobalStyles";

export const FooterLink = styled.a<{ darkTheme: boolean }>`
  width: 30px;
  height: 30px;
  margin: auto 10px;
  cursor: pointer;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }
`

export const FooterBtn = styled.button<{ darkTheme: boolean }>`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  margin: auto 10px;
  cursor: pointer;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }
`