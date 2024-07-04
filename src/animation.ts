import { motion } from "framer-motion"
import { StyledText } from "./components/General/Components/HomePart/HomeIntro/HomeIntroStyles"
import { ImageContainer } from "./components/General/Components/HomePart/HomeImg/HomeImgStyles"
import { AboutContainer, AboutTitle, InfoContainer } from "./components/General/Components/AboutPart/AboutPartStyles"
import { SkillsContainer, SkillsTitle } from "./components/General/Components/SkillsPart/SkillsPartStyles"
import { ProjectTitle, ProjectsContainer } from "./components/General/Components/Projects/ProjectsStyles"
import { ProjectsListContainer } from "./components/General/Components/Projects/ProjectList/ProjectListStyles"
import { SkillsListContainer } from "./components/General/Components/SkillsPart/SkillsList/SkillsListStyles"
import { FooterContainer, Label, PrivacyPolicyContainer } from "./components/General/Components/Footer/FooterStyles"
import { FooterBtn, FooterLink } from "./components/General/Components/Footer/FooterList/FooterListStyles"
import { PPContainer, PPHeader } from "./components/General/Components/PrivacyPolicy/PPStyles"

//For HomeImg.tsx
export const MImageContainer = motion(ImageContainer)
//For HomeIntro.tsx
export const MStyledText = motion(StyledText)
//For AboutPart.tsx
export const MAboutContainer = motion(AboutContainer)
export const MInfoContainer = motion(InfoContainer)
export const MTitle = motion(AboutTitle)
//For SkillsPart.tsx
export const MSkillsContainer = motion(SkillsContainer)
export const MSkillsTitle = motion(SkillsTitle)
//For Projects.tsx
export const MProjectsContainer = motion(ProjectsContainer)
export const MProjectTitle = motion(ProjectTitle)
//For ProjectList.tsx
export const MProjectsList = motion(ProjectsListContainer)
//For SkillsList.tsx
export const MSkillsList = motion(SkillsListContainer)
//For Footer.tsx
export const MFooterContainer = motion(FooterContainer)
export const MLabel = motion(Label)
export const MFooterLink = motion(FooterLink)
export const MFooterBtn = motion(FooterBtn)
export const MPPContainer = motion(PrivacyPolicyContainer)
//For PrivacyPolicy.tsx
export const MPrivacyBox = motion(PPContainer)
export const MHeader = motion(PPHeader)

export const leftAnimation = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

export const rightAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 }
  }),
}

export const upAnimation = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

export const downAnimation = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.2 }
  }),
}
