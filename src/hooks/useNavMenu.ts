import { useAppDispatch } from "../hook";
import { setSidebar } from "../store/modalSlice";


export const useNavMenu = () => {
  const dispatch = useAppDispatch()

  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  }

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      const offset = 100;
      const elementPosition = navItem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  };

  const openMenu = () => {
    dispatch(setSidebar({ sidebar: true, scroll: true }))
  }

  const closeMenu = () => {
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  }

  return { scrollToStart, scrollToPart, openMenu, closeMenu }
}

