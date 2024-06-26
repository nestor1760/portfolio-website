import { Image, InfoBlog, ItemContainer, LinkItem, ProjectDescription, ProjectLinks, ProjectName, StyledLink, TechContainer, TechItem } from "./ProjectItemStyles";

import { ImGithub } from "react-icons/im";
import { FaLink } from "react-icons/fa6";
import { FC } from "react";
import { IProjectItem } from "../../../../../data/interface";


const ProjectItem: FC<IProjectItem> = ({ project }) => {
  const { name, description, image_path, preview_link, tech, github_link } = project

  return (
    <ItemContainer>
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
            <StyledLink href={preview_link} target="_blank">Live preview</StyledLink>
          </LinkItem>
          <LinkItem>
            <ImGithub color="white" size={20} />
            <StyledLink href={github_link} target="_blank">View code</StyledLink>
          </LinkItem>
        </ProjectLinks>
      </InfoBlog>
    </ItemContainer>
  )
}

export default ProjectItem