import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { type SectionName } from '@/lib/types';

import { useActiveSection } from '@/context/active-section-context';

type UseSectionInViewType = {
  sectionName: SectionName;
  threshold?: number;
};

export function useSectionInView({
  sectionName,
  threshold = 0.75,
}: UseSectionInViewType) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
