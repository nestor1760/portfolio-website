import styled from "styled-components";
import { blue_color, dark_gradient, gray_text, light_gradient, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles";

export const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 156px 0 172px 0;
  color: ${white_color};

  @media ${tablet_screen} {
    margin-top: 20px;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    margin: 20px 0 30px 0;
  }
`

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`

export const InfoContainer = styled.div`
  width: 270px:
  height: 270px;
  margin: 0 34px 30px 0;
  z-index: 0;
  position: relative;

  @media ${small_tablet_screen} {
    margin: 0 0 50px 0;
  }
`

export const PersonalInfo = styled.div<{ darkTheme: boolean }>`
  width: 290px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  border-radius: 10px;
  border: 1px solid ${white_color};
  position: absolute;
  left: -10px;
  bottom: -30px;

  span {
    font-size: 20px;
    margin: 5px 0 10px 0;
  }
`

export const StyledLink = styled.a`
  color: ${white_color};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: blue;
  }
`

export const AboutTitle = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 20px 0;
  color: ${blue_color};

  @media ${tablet_screen} {
    font-size: 28px;
  }

  @media ${small_tablet_screen} {
    font-size: 24px;
  }
`

export const AboutDescription = styled.p<{ darkTheme: boolean }>`
  font-size: 16px;
  font-weight: 500;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
`