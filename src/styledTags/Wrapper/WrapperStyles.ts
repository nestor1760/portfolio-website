import styled from "styled-components";
import { back_color } from "../../GlobalStyles";

export const StyledWrapper = styled.section`
  width: 100%;
  height: 1300px;
  //change height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 0;
  flex-direction: column;
  background: ${back_color};
`