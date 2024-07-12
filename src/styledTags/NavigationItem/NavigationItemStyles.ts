import styled from "styled-components";
import { dark_gradient, light_gradient, white_color } from "../../GlobalStyles";
import { INavItemProps } from "./interface";

interface ItemProps extends INavItemProps {
  darkTheme: boolean,
}

export const NavItem = styled.p<ItemProps>`
  padding: 10px 20px;
  color: ${white_color};
  margin: ${props => props.margin || "0"};
  align-self: ${props => props.align || "start"};
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  border-radius: 10px;
`
