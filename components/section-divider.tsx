'use client';

import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.125 }}
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
    />
  );
};

export default SectionDivider;
