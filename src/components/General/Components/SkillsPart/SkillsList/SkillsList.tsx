import { useEffect } from "react";
import { dataSkills } from "../../../../../data/dataSkills";
import { FlexContainer } from "./SkillsListStyles";
import { useInView } from "react-intersection-observer";
import { SkillsUtils } from "./SkillsUtils";

const SkillsList = ({ delay }: { delay: number }) => {
  const { ref: skillsRef, inView: skillsIsVisible } = useInView()
  const { getSkillsFromData, showSkills } = SkillsUtils(delay)

  useEffect(() => {
    if (skillsIsVisible) {
      showSkills(dataSkills)
    }
  }, [delay, skillsIsVisible]);

  return (
    <FlexContainer ref={skillsRef}>
      {getSkillsFromData(dataSkills, skillsIsVisible)}
    </FlexContainer>
  )
}

export default SkillsList