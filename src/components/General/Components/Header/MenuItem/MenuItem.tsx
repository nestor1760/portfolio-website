import { FC } from "react"
import { INavItem } from "./interface"
import { MMenuItem } from "../../../../../animation"
import { useAppSelector } from "../../../../../hook"
import { blue_color, gray_text, white_color } from "../../../../../GlobalStyles"
import ActiveLine from "../ActiveLine/ActiveLine"

const MenuItem: FC<INavItem> = (props) => {
  const { switcher } = useAppSelector(state => state.switcher)
  const { label, handleClick, isSelected } = props

  const initialColor = switcher ? white_color : gray_text;

  return (
    <MMenuItem
      darkTheme={switcher}
      onClick={handleClick}
      initial={{ color: initialColor }}
      animate={{ color: isSelected ? blue_color : initialColor }}
      transition={{ duration: 0.3 }}
    >
      {isSelected && <ActiveLine />}
      {label}
    </MMenuItem>
  )
}

export default MenuItem
