import { Image, ItemContainer, ProjectDescription, ProjectName, StyledLink, TechItem } from "./ProjectItemStyles";

import { ImGithub } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import { forwardRef } from "react";
import { IProjectItem } from "../../../../../data/interface";
import { motion } from "framer-motion";
import { Container } from "../../../../../styledTags/Container/Container";
import { useAppSelector } from "../../../../../hook";


const ProjectItem = forwardRef<HTMLDivElement, IProjectItem>(({ project }, ref) => {
  const { name, description, image_path, preview_link, tech, github_link, git_label, preview_label } = project
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <ItemContainer darkTheme={switcher} ref={ref}>
      <Image src={image_path} alt={name} />
      <Container direction="column" margin="0" padding="0 10px">
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <Container align="center" wrap="wrap" width="100%" margin="0 0 30px 0">
          {tech.map((item, index) => <TechItem key={index}>{item}</TechItem>)}
        </Container>
        <Container width="100%" align="center" justify="space-between">
          <Container align="center" margin="0">
            <FaLink color="white" size={20} />
            <StyledLink href={preview_link} target="_blank">{preview_label}</StyledLink>
          </Container>
          <Container align="center" margin="0">
            <ImGithub color="white" size={20} />
            <StyledLink href={github_link} target="_blank">{git_label}</StyledLink>
          </Container>
        </Container>
      </Container>
    </ItemContainer>
  )
})

export const MProjectItem = motion(ProjectItem)
export default ProjectItem