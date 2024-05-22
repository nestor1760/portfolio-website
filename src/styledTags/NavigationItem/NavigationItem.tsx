import { NavItem } from "./NavigationItemStyles"
import { INavItemProps } from "./interface"

const NavigationItem = ({ children, id, margin, align }: INavItemProps) => {
  return (
    <NavItem id={id} margin={margin} align={align}>
      {children}
    </NavItem>
  )
}

export default NavigationItem