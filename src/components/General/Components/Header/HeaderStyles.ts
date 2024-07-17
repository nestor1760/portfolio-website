import styled from "styled-components"
import { blue_color, gray_text, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles"

export const StyledContainer = styled.header<{ scrolled: number, windowWidth: number, darkTheme: boolean }>`
  width: ${({ scrolled, windowWidth }) => (windowWidth > 959) ? (scrolled > 95 ? '100%' : '1110px') : '100%'};
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
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
  transition: 0.2s;
  &.bigger {
    border-top: none;
    top: 0;
    width: 100%;
    padding: 16px 8%;
    border-radius: 0 0 20px 20px;
  };

  @media ${tablet_screen} {
    top: 0;
    width: 100%;
    padding: 20px 10%;
    border-top: none;
    border-radius: 0 0 20px 20px;
  }

  @media ${small_tablet_screen} {
    top: 0;
    width: 100%;
    padding: 15px 16px;
    border-top: none;
    border-radius: 0 0 20px 20px;
  }
`

export const SidebarBtn = styled.button<{ darkTheme: boolean }>`
  border: none;
  background: transparent;
  color: ${({ darkTheme }) => (darkTheme ? white_color : gray_text)};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${blue_color}; 
  }
`