import React from 'react';

type SectionHeading = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeading) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
