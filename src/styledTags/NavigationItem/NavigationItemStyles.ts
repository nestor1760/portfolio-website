import styled from "styled-components";
import { white_color } from "../../GlobalStyles";
import { INavItemProps } from "./interface";

export const NavItem = styled.p<INavItemProps>`
  padding: 5px 10px;
  color: ${white_color};
  margin: ${props => props.margin || "0"};
  align-self: ${props => props.align || "start"};
  background: linear-gradient(145deg, rgba(35, 101, 255, 0.5) 53%, rgba(255, 255, 255, 0.3) 100%);
  border-radius: 10px;
`