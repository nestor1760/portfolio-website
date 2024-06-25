import { Image, InfoBlog, ItemContainer, LinkItem, ProjectDescription, ProjectLinks, ProjectName, StyledLink, TechContainer, TechItem } from "./ProjectItemStyles";

import { ImGithub } from "react-icons/im";
import { FaLink } from "react-icons/fa6";


const ProjectItem = () => {
  return (
    <ItemContainer>
      <Image />
      <InfoBlog>
        <ProjectName>Item name</ProjectName>
        <ProjectDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quasi consectetur perspiciatis reiciendis cumque eligendi, nostrum sapiente</ProjectDescription>
        <TechContainer>
          <TechItem>javascript</TechItem>
          <TechItem>typescript</TechItem>
          <TechItem>css</TechItem>
          <TechItem>react</TechItem>
        </TechContainer>
        <ProjectLinks>
          <LinkItem>
            <FaLink color="white" size={20} />
            <StyledLink href="#" target="_blank">Live preview</StyledLink>
          </LinkItem>
          <LinkItem>
            <ImGithub color="white" size={20} />
            <StyledLink href="#" target="_blank">View code</StyledLink>
          </LinkItem>
        </ProjectLinks>
      </InfoBlog>
    </ItemContainer>
  )
}

export default ProjectItem