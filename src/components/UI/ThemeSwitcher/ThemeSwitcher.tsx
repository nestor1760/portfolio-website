import { useAppDispatch, useAppSelector } from "../../../hook";
import { toggleSwitcher } from "../../../store/switcherSlices";
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

  const toogleSwitch = () => {
    dispatch(toggleSwitcher())
  }
  
  return (
    <SwitcherBox onClick={toogleSwitch} className={switcher ? 'switchOn' : ''}>
      <MHandle layout transition={spring} aria-label="Switch theme mode" />
    </SwitcherBox>
  );
}

