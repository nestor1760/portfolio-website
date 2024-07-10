import styled from "styled-components";
import { blue_color, gray_text, mobile_screen, white_color } from "../../../../GlobalStyles";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer<{ darkTheme: boolean }>`
  width: 80%;
  height: 160px;
  margin: 150px 0 0 0;
  overflow: hidden;
  border-top: ${({ darkTheme }) => (darkTheme ? '2px solid white' : `2px solid ${gray_text}`)};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

export const FooterMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0;

  @media (max-width: 590px) {
    justify-content: center;
  }
`

export const PrivacyPolicyContainer = styled.div<{ darkTheme: boolean }>`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  font-size: 14px;

  @media ${mobile_screen} {
    font-size: 12px;
    text-align: center;
  }
`

export const StyledLink = styled(Link)`
  color: ${white_color};
  margin: 0 0 5px 0;
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }
`
