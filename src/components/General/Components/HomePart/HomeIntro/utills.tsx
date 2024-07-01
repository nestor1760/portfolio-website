import { useState } from "react";

const IntroUtills = () => {
  const [letters, setLetters] = useState<string[]>([]);

  const animatedString = (name: string) => {
    setLetters([]);
    const newArr = name.split('');
    const timeouts: NodeJS.Timeout[] = [];

    newArr.forEach((char, index) => {
      const timeout = setTimeout(() => {
        setLetters(prev => [...prev, char]);
      }, 300 * index);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  };

  return { animatedString, letters }
}

export default IntroUtills