import { useEffect, useRef, useState } from "react";
import { SkillsUtils } from "./SkillsUtils";
import { FlexContainer } from "./SkillsListStyles";
import { TItem } from "../../../../../data/interface";

const SkillsList = ({ delay, data }: { delay: number, data: TItem[] }) => {
  const { getSkillsFromData, showSkills } = SkillsUtils(delay);
  const [skillsIsVisible, setSkillsIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    if (skillsIsVisible && !hasBeenVisible) {
      showSkills(data);
      setHasBeenVisible(true);
    }
  }, [skillsIsVisible, hasBeenVisible, data, showSkills]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsRef]);

  return (
    <FlexContainer ref={skillsRef}>
      {getSkillsFromData(data, hasBeenVisible)}
    </FlexContainer>
  );
};

export default SkillsList;
