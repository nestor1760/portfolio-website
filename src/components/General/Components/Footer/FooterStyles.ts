import styled from "styled-components";
import { blue_color, mobile_screen, white_color } from "../../../../GlobalStyles";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 80%;
  height: 160px;
  margin: 150px 0 0 0;
  overflow: hidden;
  border-top: 2px solid white;
  color: ${white_color};
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

export const Label = styled.p`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${blue_color};
  cursor: pointer;
  transition: 0.3s;
  & >span {
    color: ${white_color};
  }
  &:hover {
    color: ${white_color};
    & span {
      color: ${blue_color};
    }
  }
`

export const PrivacyPolicyContainer = styled.div`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  color: ${white_color};
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
