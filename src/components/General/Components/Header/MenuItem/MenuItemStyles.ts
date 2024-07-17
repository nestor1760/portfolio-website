import styled from "styled-components";
import { gray_text, white_color } from "../../../../../GlobalStyles";

export const StyledMenuItem = styled.div<{ darkTheme: boolean }>`
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  border: none;
  background: transparent;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  cursor: pointer;
  margin-right: 30px;
  
  &:last-child {
    margin-right: 0px;
  }
`