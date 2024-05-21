import styled, { keyframes } from "styled-components"
import { first_color, white_color } from "../../../GlobalStyles"

export const SidebarOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 250ms;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(0);
  &.open {
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(10px);
  }
`

const openAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export const SidebarMenu = styled.div`
  position: relative;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-left: 0.5px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px 0 0 15px;
  overflow: hidden;
  animation: ${closeAnimation} 250ms ease-in-out forwards;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${openAnimation} 250ms ease-in-out forwards;
  }
`

export const SidebarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: ${white_color};
`

export const SidebarBody = styled.div`
  width: 100%;
  height: 50%;
  margin: 50px 0 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: ${white_color};
  cursor: pointer;
  transition: 0.2s;
  margin-right: 10px;
  &:hover {
    color: ${first_color}; 
  }
`

export const SidebarItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 15px 10px;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: ${white_color};
  transition: 0.2s;
  &:hover {
    color: ${first_color};
    background: ${white_color};
  }
`

export const Span = styled.span`
  margin-left: 10px;
`

export const SidebarFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: ${white_color};
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`