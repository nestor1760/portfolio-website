import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode,
  width?: string,
  height?: string,
  onClick?: () => void,
}