import styled from "styled-components";
import { blue_color, mobile_screen, small_tablet_screen } from "../../../GlobalStyles";

export const ScrollBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 100%;
  background: ${blue_color};
  transform-origin: top;

  @media ${small_tablet_screen} {
    width: 7px;
  }

  @media ${mobile_screen} {
    width: 5px;
  }
`
