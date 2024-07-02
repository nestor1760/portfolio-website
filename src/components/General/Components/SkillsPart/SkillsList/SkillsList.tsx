import { TItem } from "../../../../../data/interface";
import { MSkillItem } from "../SkillsItem/SkillsItem";
import { MSkillsList, rightAnimation } from "../../../../../animation";

const SkillsList = ({ data }: { data: TItem[] }) => {
  return (
    <MSkillsList
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      {data.map((item, index) => (
        <MSkillItem item={item} key={item.id} variants={rightAnimation} custom={index} />
      ))}
    </MSkillsList>
  );
};

export default SkillsList;

