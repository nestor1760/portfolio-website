import styled from "styled-components";
import { blue_color, white_color } from "../../../../../GlobalStyles";

export const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FooterLink = styled.a`
  width: 30px;
  height: 30px;
  margin: auto 10px;
  cursor: pointer;
  color: ${white_color};
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }
`

export const FooterBtn = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  background: transparent;
  margin: auto 10px;
  cursor: pointer;
  color: ${white_color};
  transition: 0.3s;

  &:hover {
    color: ${blue_color};
  }
`