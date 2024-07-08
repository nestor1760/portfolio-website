import { forwardRef } from "react"
import { NavItem } from "./NavigationItemStyles"
import { INavItemProps } from "./interface"
import { motion } from "framer-motion"
import { useAppSelector } from "../../hook"

const NavigationItem = forwardRef<HTMLDivElement, INavItemProps>(({ children, ...props }, ref) => {
  const { align, id, margin } = props
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <NavItem darkTheme={switcher} id={id} margin={margin} align={align} ref={ref}>
      {children}
    </NavItem>
  )
})

export const MNavigationItem = motion(NavigationItem)
export default NavigationItem