import styled from "styled-components";
import { blue_color, white_color } from "../../../GlobalStyles";
import { IButtonProps } from "./interface";

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.width || '190px'};
  height: ${props => props.height || 'auto'};
  border-radius: 20px;
  background: ${props => props.background || blue_color};
  color: ${props => props.color || white_color};
  margin: ${props => props.margin || '0'};
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.2s;
  &:hover {
    background: ${props => props.hoverBack || white_color};;
    color: ${props => props.hoverColor || blue_color};;
  }
`
