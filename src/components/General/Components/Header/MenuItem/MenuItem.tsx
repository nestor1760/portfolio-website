import { FC } from "react"
import { INavItem } from "./interface"
import { ActiveLine, StyledMenuItem } from "./MenuItemStyles"
import { motion } from "framer-motion"
import { blue_color, white_color } from "../../../../../GlobalStyles"

const MenuItem: FC<INavItem> = (props) => {
  const { label, handleClick, isSelected } = props

  const MItem = motion(StyledMenuItem)

  return (
    <MItem
      onClick={handleClick}
      initial={{ color: white_color }}
      animate={{ color: isSelected ? blue_color : white_color }}
    >
      {isSelected && <ActiveLine />}
      {label}
    </MItem>
  )
}

export default MenuItem
