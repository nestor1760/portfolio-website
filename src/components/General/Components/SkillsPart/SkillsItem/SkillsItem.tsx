import { forwardRef } from "react"
import { SkillItemProps } from "../../../../../data/interface"
import { Img, ItemContainer, Text } from "./SkillsItemStyles"
import { motion } from "framer-motion"
import { useAppSelector } from "../../../../../hook"

const SkillItem = forwardRef<HTMLDivElement, SkillItemProps>(({ item }, ref) => {
  const { image, title } = item
  const { switcher } = useAppSelector(state => state.switcher)

  return (
    <ItemContainer darkTheme={switcher} ref={ref}>
      <Img src={image} alt={title} />
      <Text>{title}</Text>
    </ItemContainer>
  )
})

export const MSkillItem = motion(SkillItem)
export default SkillItem