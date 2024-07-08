import { useAppDispatch, useAppSelector } from "../../../hook";
import { toggleIsOn } from "../../../store/switcherSlices";
import { SwitcherBox } from "./ThemeSwitcherStyles";
import { MHandle } from "../../../animation";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export const Switcher = () => {
  const { switcher } = useAppSelector(state => state.switcher)
  const dispatch = useAppDispatch()

  console.log(switcher);


  const toogleSwitch = () => {
    dispatch(toggleIsOn())
  }

  return (
    <SwitcherBox onClick={toogleSwitch} className={switcher ? 'switchOn' : ''}>
      <MHandle layout transition={spring} />
    </SwitcherBox>
  );
}

