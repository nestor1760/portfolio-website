import styled from "styled-components";
import { blue_color } from "../../../../../GlobalStyles";

export const Line = styled.div<{ darkTheme: boolean }>`
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -6px;
  background-color: ${blue_color};
`