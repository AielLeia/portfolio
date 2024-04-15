'use client';

import React, { createContext, useContext, useState } from 'react';

import { type SectionName } from '@/lib/types';

type ActiveSectionContextProvider = {
  children: React.ReactNode;
};

type ActionSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActionSectionContextType | null>(
  null
);

const ActiveSectionContextProvider = ({
  children,
}: ActiveSectionContextProvider) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export function useActiveSection() {
  const actionSectionContext = useContext(ActiveSectionContext);
  if (actionSectionContext === null) {
    throw new Error(
      'useActiveSection must be used within an ActiveSectionContextProvider'
    );
  }

  return actionSectionContext;
}

export default ActiveSectionContextProvider;
