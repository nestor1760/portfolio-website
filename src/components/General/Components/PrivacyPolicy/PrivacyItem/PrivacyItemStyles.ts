import styled from "styled-components"
import { black_color, blue_color, gray_text, mobile_screen, small_tablet_screen, white_color } from "../../../../../GlobalStyles"

export const ItemBox = styled.div<{ darkTheme: boolean }>`
  border: ${({ darkTheme }) => (darkTheme ? `1px solid ${black_color}` : `1px solid ${white_color}`)};
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 40px 0 20px 0;
  padding: 20px;
  color: ${white_color};
  box-shadow: 0px 20px 30px -16px ${blue_color};
  border-radius: 20px;

  @media ${small_tablet_screen} {
    align-self: center;
    width: 70%;
    padding: 15px;
    margin: 20px 0 10px 0;
  }

  @media ${mobile_screen} {
    width: 100%;
    padding: 10px;
    margin: 15px 0;
  }
`

export const PPTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${blue_color};

  @media ${small_tablet_screen} {
    font-size: 28px;
  }

  @media ${mobile_screen} {
    font-size: 24px;
  }
`

export const PPText = styled.p<{ darkTheme: boolean }>`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};

  @media ${small_tablet_screen} {
    font-size: 18px;
    margin: 8px 0;
  }

  @media ${mobile_screen} {
    font-size: 16px;
    margin: 5px 0;
  }
`