import { IProjectProps } from "../../../../../data/interface"
import { useLanguage } from "../../../../../hooks/useLanguage"
import ProjectItem from "../ProjectItem/ProjectItem"
import { FlexContainer } from "./ProjectListStyles"

const ProjectList = () => {
  const { t } = useLanguage()

  const projects = t("projectsPart.projects", { returnObjects: true }) as IProjectProps[];

  console.log(projects);

  return (
    <FlexContainer>
      {projects.map((item) => (
        <ProjectItem project={item} key={item.id} />
      ))}
    </FlexContainer>
  )
}

export default ProjectList