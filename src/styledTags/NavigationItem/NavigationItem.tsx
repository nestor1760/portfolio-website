import { forwardRef } from "react"
import { NavItem } from "./NavigationItemStyles"
import { INavItemProps } from "./interface"
import { motion } from "framer-motion"

const NavigationItem = forwardRef<HTMLDivElement, INavItemProps>(({ children, ...props }, ref) => {
  const { align, id, margin } = props

  return (
    <NavItem id={id} margin={margin} align={align} ref={ref}>
      {children}
    </NavItem>
  )
})

export const MNavigationItem = motion(NavigationItem)
export default NavigationItem