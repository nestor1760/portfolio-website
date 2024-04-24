import styled from "styled-components";
import { white_color } from "../../GlobalStyles";
import { INavItemProps } from "./interface";

export const NavItem = styled.p<INavItemProps>`
  width: 100%;
  height: 20px;
  color: ${white_color};
  margin: ${props => props.margin || "0"};
`