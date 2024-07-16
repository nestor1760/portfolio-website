import styled from "styled-components";
import { dark_back_color, light_back_color } from "../../GlobalStyles";

export const StyledWrapper = styled.section<{ darkTheme: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  flex-direction: column;
  background: ${({ darkTheme }) => (darkTheme ? dark_back_color : light_back_color)};
  
`

