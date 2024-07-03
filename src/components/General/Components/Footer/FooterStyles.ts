import styled from "styled-components";
import { blue_color, white_color } from "../../../../GlobalStyles";

export const FooterContainer = styled.footer`
  width: 80%;
  height: 80px;
  margin: 150px 0 0 0;
  border-top: 2px solid white;
  color: ${white_color};
  display: flex;
  align-items: center;
  justify-content: space-between;

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