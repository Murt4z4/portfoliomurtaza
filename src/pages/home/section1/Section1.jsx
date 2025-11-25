import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle } from 'lucide-react';
import PulseDot from '../../../components/Dot';

const Section1 = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = [
    "Technology | Business | Design",
    "Product / Project Manager | Business Analyst",
    "Product Designer | UX/UI | MVPs & Interactive Prototypes",
    "Digital Transformation & Change Management Consultant",
    "Full-Stack Developer | Web Apps | AI Automation & Integration",
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000); // ~4s per title for smoother readability

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      className="px-8 py-6  md:py-6 text-white flex flex-col justify-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay:'0.2', ease: 'easeOut' }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full">
        {/* Left Text */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-base leading-tight mb-6 md:mb-10">
            I'm Murtaza.<br />
            {/* Fixed height container to prevent layout shifts */}
            <div className="h-[3.5rem] md:h-[4rem] flex items-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>

          
        </div>

        {/* Right Contact */}
        <div className="mt-10 md:mt-0 flex flex-col justify-end text-right text-sm md:text-base space-y-3">
          <div className="flex items-center justify-end space-x-2">
            <PulseDot />
            <span>Available for work</span>
          </div>
          <a
            href="mailto:hello@murtaza.work"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            hello@murtaza.work
          </a>
        </div>

      </div>
    </motion.section>
  );
};

export default Section1;