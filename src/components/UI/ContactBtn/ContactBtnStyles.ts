import styled from "styled-components";
import { first_color, white_color } from "../../../GlobalStyles";
import { IButtonProps } from "./interface";

export const StyledButton = styled.button<IButtonProps>`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: 20px;
  background: ${first_color};
  color: ${white_color};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  &:hover {
    background: ${white_color};
    color: ${first_color};
  }
`
