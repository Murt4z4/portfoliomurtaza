import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import PulseDot from '../../../components/Dot';

const Section1 = () => {
  return (
    <motion.section
      className="px-4 py-6 md:px-14 md:py-6 text-white flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left Text */}
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-base leading-tight">
            My Work
          </h1>

         
        </div>
      </div>
    </motion.section>
  );
};

export default Section1;
