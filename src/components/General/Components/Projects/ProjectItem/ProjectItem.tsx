import { Image, InfoBlog, ItemContainer, LinkItem, ProjectDescription, ProjectLinks, ProjectName, StyledLink, TechContainer, TechItem } from "./ProjectItemStyles";

import { ImGithub } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import { forwardRef } from "react";
import { IProjectItem } from "../../../../../data/interface";
import { motion } from "framer-motion";


const ProjectItem = forwardRef<HTMLDivElement, IProjectItem>(({ project }, ref) => {
  const { name, description, image_path, preview_link, tech, github_link, git_label, preview_label } = project

  return (
    <ItemContainer ref={ref}>
      <Image src={image_path} alt={name} />
      <InfoBlog>
        <ProjectName>{name}</ProjectName>
        <ProjectDescription>{description}</ProjectDescription>
        <TechContainer>
          {tech.map((item, index) => <TechItem key={index}>{item}</TechItem>)}
        </TechContainer>
        <ProjectLinks>
          <LinkItem>
            <FaLink color="white" size={20} />
            <StyledLink href={preview_link} target="_blank">{preview_label}</StyledLink>
          </LinkItem>
          <LinkItem>
            <ImGithub color="white" size={20} />
            <StyledLink href={github_link} target="_blank">{git_label}</StyledLink>
          </LinkItem>
        </ProjectLinks>
      </InfoBlog>
    </ItemContainer>
  )
})

export const MProjectItem = motion(ProjectItem)
export default ProjectItem