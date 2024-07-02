import { MProjectsList, rightAnimation } from "../../../../../animation"
import { IProjectProps } from "../../../../../data/interface"
import { useLanguage } from "../../../../../hooks/useLanguage"
import { MProjectItem } from "../ProjectItem/ProjectItem"

const ProjectList = () => {
  const { t } = useLanguage()
  const projects = t("projectsPart.projects", { returnObjects: true }) as IProjectProps[];

  return (
    <MProjectsList
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {projects.map((item, index) => (
        <MProjectItem variants={rightAnimation} custom={index} project={item} key={item.id} />
      ))}
    </MProjectsList>
  )
}

export default ProjectList
