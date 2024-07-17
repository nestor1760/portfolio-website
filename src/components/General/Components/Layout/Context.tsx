import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from 'react';

type VisibilityContextType = {
  visibleSection: string | null;
  setVisibleSection: Dispatch<SetStateAction<string | null>>;
};

const VisibilityContext = createContext<VisibilityContextType>({
  visibleSection: null,
  setVisibleSection: () => { }
});

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  return (
    <VisibilityContext.Provider value={{ visibleSection, setVisibleSection }}>
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  return useContext(VisibilityContext);
};
