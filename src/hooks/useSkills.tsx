import { useState } from "react";
import { TItem } from "../data/interface";
import SkillsItem from "../components/General/Components/SkillsPart/SkillsItem/SkillsItem";


export const useSkills = (delay: number) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  const showSkills = (data: TItem[]) => {
    data.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * delay);
    });
  };

  const getSkillsFromData = (data: TItem[], skillsIsVisible: boolean) => {
    if (skillsIsVisible) {
      return data.map((item, index) => (
        <SkillsItem item={item} key={item.id} isVisible={visibleItems.includes(index)} />
      ));
    }
    return null;
  };

  return { getSkillsFromData, showSkills };
};

