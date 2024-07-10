import { forwardRef } from "react"
import { ItemBox, PPText, PPTitle } from "./PrivacyItemStyles"
import { motion } from "framer-motion"
import { IPrivacyProps } from "../interface"
import { useAppSelector } from "../../../../../hook"

const PrivacyItem = forwardRef<HTMLDivElement, IPrivacyProps>(({ item }, ref) => {
  const { text, title } = item
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <ItemBox darkTheme={switcher} ref={ref}>
      <PPTitle>{title}</PPTitle>
      {text.map((paragraph) => (
        <PPText darkTheme={switcher} key={paragraph.id}>{paragraph.body}</PPText>
      ))}
    </ItemBox>
  )
})

export default PrivacyItem
export const MPrivacyItem = motion(PrivacyItem)
