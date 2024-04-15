'use client';

import React from 'react';

import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

import Project from '@/components/projet';
import SectionHeading from '@/components/section-heading';

const Projects = () => {
  const { ref } = useSectionInView({ sectionName: 'Projects', threshold: 0.5 });

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
