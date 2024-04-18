'use client';

import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

import { useSectionInView } from '@/lib/hooks';

import SectionHeading from '@/components/section-heading';

const Contact = () => {
  const { ref } = useSectionInView({ sectionName: 'Contact' });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:exemple@gmail.com">
          exemple@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          className="h-14 px-4 rounded-lg c-border-black"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52  my-3 rounded-lg c-border-black p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 group focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
