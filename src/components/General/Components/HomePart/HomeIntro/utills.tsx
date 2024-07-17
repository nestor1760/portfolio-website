import { useState } from "react";
import { useWindowWidth } from "../../../../../hooks/useWindowWidth";
import { useAppDispatch } from "../../../../../hook";
import { setShow } from "../../../../../store/modalSlice";

const IntroUtills = () => {
  const [letters, setLetters] = useState<string[]>([]);
  const { windowWidth } = useWindowWidth()
  const dispatch = useAppDispatch()

  const sizeTitle = windowWidth > 889 ? '28px' : '22px';
  const sizeName = windowWidth > 889 ? '40px' : '30px';
  const sizeText = windowWidth > 889 ? '24px' : '18px';

  const animatedString = (name: string) => {
    setLetters([]);
    const newArr = name.split('');
    const timeouts: NodeJS.Timeout[] = [];

    newArr.forEach((char, index) => {
      const timeout = setTimeout(() => {
        setLetters(prev => [...prev, char]);
      }, 200 * index);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  };

  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }

  return { animatedString, letters, sizeName, sizeText, sizeTitle, showModal }
}

export default IntroUtills