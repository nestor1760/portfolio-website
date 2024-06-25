import ProjectItem from "../ProjectItem/ProjectItem"
import { FlexContainer } from "./ProjectListStyles"

const ProjectList = () => {
  return (
    <FlexContainer>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </FlexContainer>
  )
}

export default ProjectList