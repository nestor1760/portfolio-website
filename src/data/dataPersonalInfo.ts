import { IPersonalInfo } from "./interfaces";

export const personalData:IPersonalInfo = {
  id: 1,
  birth: '02.04.2001',
  name: "Roman Nesterchuk",
  email: 'romannesterchuk01@gmail.com',
  github: 'https://github.com/nestor1760',
  image: '/media/photoPortfolio.jpg',
  location: 'Cracow',
  number: '+48 886 191 807',
  linkedin: 'https://www.linkedin.com/in/roman-nesterchuk-182434278/',
  facebook: 'https://www.facebook.com/roman.nesterchuk.96/',
  education: [
    {
      id: 1,
      name: 'University of Economics in Cracow',
      period: '2021 - 2023',
      degree: 'Master',
      specialization: 'Business management',
    },
    {
      id: 2,
      name: 'Maria Curie-Sklodowska University in Lublin',
      period: '2018 - 2021',
      degree: 'Bachelor',
      specialization: 'International Logistics',
    },
  ],
  languages: [
    {
      id: 1,
      language: 'Polish',
      level: 'B2+'
    },
    {
      id: 2,
      language: 'English',
      level: 'A2'
    },
    {
      id: 3,
      language: 'Ukrainian',
      level: 'native'
    },
  ]
}