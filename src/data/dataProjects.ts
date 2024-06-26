import { IProjectProps } from "./interface";

export const dataProjects: IProjectProps[] = [
  {
    id: 1,
    name: 'Calyptus',
    description: 'This is a multipage online store website developed using technologies such as:',
    github_link: 'https://github.com/nestor1760/Calyptus-page',
    image_path: '/public/media/projects_media/calyptus.png',
    preview_link: 'https://portfolio-project-three-gray.vercel.app/',
    tech: ['Javascript', 'React', 'css modules', 'Redux'],
  },
  {
    id: 2,
    name: 'Horyzonty',
    description: 'This is a landing page for a travel agency created using technologies such as:',
    github_link: 'https://github.com/nestor1760/Horyzonty-page',
    image_path: '/public/media/projects_media/horyzonty.png',
    preview_link: 'https://horyzonty-page.vercel.app/',
    tech: ['Typescript', 'React', 'Redux Toolkit', 'Styled components'],
  },
  {
    id: 3,
    name: 'Rick & Morty',
    description: 'This is a multipage website I used to practice my skills in technologies such as:',
    github_link: 'https://github.com/nestor1760/Rick-Morty-Page',
    image_path: '/public/media/projects_media/rick&morty.png',
    preview_link: 'https://rick-morty-page-sigma.vercel.app/',
    tech: ['Javascript', 'React', 'API', 'Bootstrap', 'Scss'],
  },
]