import styled from "styled-components";
import { blue_color, mobile_screen, small_tablet_screen, white_color } from "../../../GlobalStyles";
import { IButtonProps } from "./interface";

export const StyledButton = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.width || '190px'};
  height: ${props => props.height || 'auto'};
  border-radius: ${props => props.radius || '20px'};
  background: ${props => props.background || blue_color};
  color: ${props => props.color || white_color};
  margin: ${props => props.margin || '0'};
  padding: 10px 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.border || 'none'};
  transition: 0.3s;
  &:hover {
    background: ${props => props.hoverBack || white_color};
    color: ${props => props.hoverColor || blue_color};
    border: ${props => props.hoverBorder || 'none'};
  }

  @media ${small_tablet_screen} {
    font-size: 16px;
  }

  @media ${mobile_screen} {
    font-size: 14px;
  }
`
