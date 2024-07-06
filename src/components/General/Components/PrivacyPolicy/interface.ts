interface IText {
  id: number,
  body: string
}

export interface IPrivacy {
  id: number,
  title: string,
  text: IText[],
}

export interface IPrivacyProps {
  item: IPrivacy,
}