import { FC } from "react"
import { INavItem } from "./interface"
import { StyledMenuItem } from "./MenuItemStyles"

const MenuItem: FC<INavItem> = (props) => {
  const { label, handleClick } = props

  return (
    <StyledMenuItem
      onClick={handleClick}
    >
      {label}
    </StyledMenuItem>
  )
}

export default MenuItem
