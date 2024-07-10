import styled from "styled-components";
import { blue_color, gray_text, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles";

export const PPContainer = styled.section`
  width: 80%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${white_color};
  padding: 0 30px;

  @media ${tablet_screen} {
    padding: 0 25px;
    width: 100%;
  }

  @media ${small_tablet_screen} {
    padding: 0 20px;
    width: 100%;
    justify-content: center;
  }

  @media ${mobile_screen} {
    padding: 0 15px;
    width: 100%;
    justify-content: center;
  }
`

export const PPHeader = styled.header<{ darkTheme: boolean }>`
  position: sticky;
  width: 100%;
  top: 20px;
  left: 0;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 2;
  border-radius: 20px;
  background: ${({ darkTheme }) => (darkTheme ? 'rgba(255, 255, 255, 0.05)' : white_color)};
  backdrop-filter: blur(10px);
  box-shadow: 0px 20px 30px -16px ${blue_color};
  padding: 16px 15px;

  @media ${small_tablet_screen} {
    top: 0px;
    border-radius: 0 0 20px 20px;
  }

  @media ${mobile_screen} {
    top: 0px;
    border-radius: 0 0 20px 20px;
  }
`

export const TitleText = styled.h1<{ darkTheme: boolean }>`
  width: 100%;
  font-size: 45px;
  margin: 70px 0 30px 0;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};

  @media ${small_tablet_screen} {
    font-size: 36px;
    margin: 30px 0 30px 0;
  }

  @media ${mobile_screen} {
    font-size: 34px;
    margin: 20px 0 30px 0;
  }
`