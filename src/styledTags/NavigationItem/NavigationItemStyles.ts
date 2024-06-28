import styled from "styled-components";
import { gradient, white_color } from "../../GlobalStyles";
import { INavItemProps } from "./interface";

export const NavItem = styled.p<INavItemProps>`
  padding: 5px 10px;
  color: ${white_color};
  margin: ${props => props.margin || "0"};
  align-self: ${props => props.align || "start"};
  background: ${gradient};
  border-radius: 10px;
`