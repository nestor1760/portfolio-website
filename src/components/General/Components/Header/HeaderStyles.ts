import styled from "styled-components"
import { blue_color, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles"

export const StyledContainer = styled.header<{ scrolled: number, windowWidth: number }>`
  width: ${({ scrolled, windowWidth }) => (windowWidth > 959) ? (scrolled > 95 ? '100%' : '1110px') : '100%'};
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${white_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 2;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0px 26px 24px -16px rgba(0, 0, 0, 1);
  padding: 16px 15px;
  transition: 0.2s;
  &.bigger {
    border-top: none;
    top: 0;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
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
export const Title = styled.p`
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

export const NavigationMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SidebarBtn = styled.button`
  border: none;
  background: transparent;
  color: ${white_color};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${blue_color}; 
  }
`