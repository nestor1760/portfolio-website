import styled from "styled-components";
import { back_color, first_color, white_color } from "../../../GlobalStyles";

export const StyledSelect = styled.select`
  outline: none;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-size: 16px;
  margin: 0 25px 0 0;
  cursor: pointer;
  color: ${white_color};
  transition: 0.3s;

  &:hover {
    color: ${first_color};
  }

  & option {
    color: white;
    background: ${back_color};
  }
`

