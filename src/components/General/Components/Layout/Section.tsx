import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useVisibility } from './Context';

const Section = ({ id, children }: { id: string, children: React.ReactNode }) => {
  const { setVisibleSection } = useVisibility();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setVisibleSection(id);
    }
  }, [inView, id, setVisibleSection]);

  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
}

export default Section;
