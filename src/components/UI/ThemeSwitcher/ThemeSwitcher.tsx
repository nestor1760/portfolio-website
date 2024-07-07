import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { toggleIsOn } from "../../../store/switcherSlices";
import { Handle, SwitcherBox } from "./ThemeSwitcherStyles";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export const Switcher = () => {
  const { switchOn } = useAppSelector(state => state.switcher)
  const dispatch = useAppDispatch()

  console.log(switchOn);


  const toogleSwitch = () => {
    dispatch(toggleIsOn())
  }

  const MHandle = motion(Handle)

  return (
    <SwitcherBox onClick={toogleSwitch} className={switchOn ? 'switchOn' : ''}>
      <MHandle layout transition={spring} />
    </SwitcherBox>
  );
}

