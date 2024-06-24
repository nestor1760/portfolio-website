import { TItem } from "../../../../../data/interface"
import { Img, ItemContainer, Text } from "./SkillsItemStyles"

const SkillsItem = ({ item, isVisible }: { item: TItem, isVisible: boolean }) => {
  const { image, title } = item

  return (
    <ItemContainer isVisible={isVisible}>
      <Img src={image} alt={title} />
      <Text>{title}</Text>
    </ItemContainer>
  )
}

export default SkillsItem