import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode,
  width?: string,
  height?: string,
  margin?: string,
  color?: string,
  hoverColor?: string,
  hoverBack?: string,
  background?: string,
  border?: string,
  onClick?: () => void,
}