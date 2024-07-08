interface IAnimatedItemProps {
  top?: string,
  left?: string,
  right?: string,
  bottom?: string,
  delay?: string,
}

export interface IAnimatedItem extends IAnimatedItemProps {
  darkTheme: boolean,
}