import { forwardRef } from "react"
import { ItemBox, PPText, PPTitle } from "./PrivacyItemStyles"
import { motion } from "framer-motion"
import { IPrivacyProps } from "../interface"

const PrivacyItem = forwardRef<HTMLDivElement, IPrivacyProps>(({ item }, ref) => {
  const { text, title } = item

  console.log(text);


  return (
    <ItemBox ref={ref}>
      <PPTitle>{title}</PPTitle>
      {text.map((paragraph) => (
        <PPText key={paragraph.id}>{paragraph.body}</PPText>
      ))}
    </ItemBox>
  )
})

export default PrivacyItem
export const MPrivacyItem = motion(PrivacyItem)