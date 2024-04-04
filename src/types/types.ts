import { ReactNode } from "react";

//for PersonalInfo.tsx
export interface IPersonalInfo {
  id: number;
  image: string;
  name: string;
  number: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

//for Wrapper.tsx
export interface IWrapper {
  children: ReactNode,
}

//for IContainerProps.tsx
export interface IContainerProps {
  children: ReactNode,
  display?: string,
  align?: string,
  justify?: string,
  direction?: string,
  width?: string,
  height?: string,
  margin?: string,
  padding?: string,
  background?: string,
  wrap?: string,
  radius?: string,
}

//for modalSlice.ts
export interface ISidebarState {
  scroll: boolean,
  sidebar: boolean,
}