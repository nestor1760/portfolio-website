import { dataProjects } from "../../../../../data/dataProjects"
import ProjectItem from "../ProjectItem/ProjectItem"
import { FlexContainer } from "./ProjectListStyles"

const ProjectList = () => {
  return (
    <FlexContainer>
      {dataProjects.map((item) => (
        <ProjectItem project={item} key={item.id} />
      ))}
    </FlexContainer>
  )
}

export default ProjectList