import { NavItem } from "./NavigationItemStyles"
import { INavItemProps } from "./interface"

const NavigationItem = ({ children, id, margin }: INavItemProps) => {
  return (
    <NavItem id={id} margin={margin}>
      {children}
    </NavItem>
  )
}

export default NavigationItem