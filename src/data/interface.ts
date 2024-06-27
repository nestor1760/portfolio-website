//interface for List of skills
export type TItem = {
  id: number,
  title: string,
  image: string,
}

//interface for list of projects
export interface IProjectProps {
  id: number,
  name: string,
  description: string,
  image_path: string,
  tech: string[],
  github_link: string,
  preview_link: string,
  preview_label: string,
  git_label: string,
}

export interface IProjectItem {
  project: IProjectProps,
}