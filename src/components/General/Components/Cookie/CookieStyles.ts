import styled from "styled-components";
import { Link } from "react-router-dom";
import { dark_gradient, light_gradient, mobile_screen, small_tablet_screen, white_color } from "../../../../GlobalStyles";

export const CookieBox = styled.section<{ darkTheme: boolean }>`
  position: fixed;
  max-width: 500px;
  bottom: 0;
  right: 0;
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  backdrop-filter: blur(10px);
  color: ${white_color};
  border-radius: 10px;
  z-index: 3;
  margin: 50px;
  padding: 20px;
  font-size: 18px;

  @media ${small_tablet_screen} {
    margin: 30px;
    font-size: 16px;
  }
  @media ${mobile_screen} {
    font-size: 14px;
    margin: 0;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`

export const SLink = styled(Link)`
  color: ${white_color};
`