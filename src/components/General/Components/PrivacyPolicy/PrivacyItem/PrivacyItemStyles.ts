import styled from "styled-components"
import { blue_color, mobile_screen, small_tablet_screen, white_color } from "../../../../../GlobalStyles"

export const ItemBox = styled.div`
border: 1px solid black;
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 40px 0 20px 0;
  padding: 20px;
  color: ${white_color};
  box-shadow: 0px 26px 24px -16px rgba(0, 0, 0, 1);
  border-radius: 20px;

  @media ${small_tablet_screen} {
    width: 100%;
    padding: 7px;
  }

  @media ${mobile_screen} {
    width: 100%;
    padding: 5px;
  }
`

export const PPTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${blue_color};

  @media ${small_tablet_screen} {
    font-size: 34px;
  }

  @media ${mobile_screen} {
    font-size: 30px;
  }
`

export const PPText = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;

  @media ${small_tablet_screen} {
    font-size: 18px;
    margin: 8px 0;
  }

  @media ${mobile_screen} {
    font-size: 16px;
    margin: 5px 0;
  }
`