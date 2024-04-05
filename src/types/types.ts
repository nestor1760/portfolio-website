import { ReactNode } from "react";

//for PersonalInfo.tsx
interface IUniversity {
  id: number,
  name: string,
  period: string,
  degree: string,
  specialization: string,
}

interface ILanguages {
  id: number,
  language: string,
  level: string,
}

export interface IPersonalInfo {
  id: number;
  birth: string;
  image: string;
  name: string;
  number: string;
  email: string;
  linkedin: string;
  facebook: string;
  github: string;
  location: string;
  languages: ILanguages[];
  education: IUniversity[];
}

//for Wrapper.tsx
export interface IWrapper {
  children: ReactNode,
}

//for dataSkills.tsx
export interface ISkillsItem {
  id: number,
  image: string,
  title: string,
}

//for modalSlice.ts
export interface ISidebarState {
  scroll: boolean,
  sidebar: boolean,
}