import styled from "styled-components";
import { blue_color, gray_text } from "../../../GlobalStyles";

export const LoaderItem = styled.div<{ darkTheme: boolean }>`
  margin: 40px 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ darkTheme }) => (darkTheme ? blue_color : gray_text)};
`