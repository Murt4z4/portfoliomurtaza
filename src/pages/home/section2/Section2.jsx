import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../data/projectsData'

const GallerySection = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-full min-h-[60vh] px-4 py-6 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7,delay:'0.4', ease: 'easeOut' }}
    >
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative rounded-xl  overflow-hidden shadow-lg group hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
          >
            {/* Image */}
            <img
            onClick={() => navigate(`/work/project/${project.id}`)}
              src={project.src}
              alt={project.title}
              className="w-full h-full  object-fit group-hover:scale-105 transition-transform duration-300"
            />

            {/* Glass Title - Hidden until hover */}
            <div
              onClick={() => navigate(`/work/project/${project.id}`)}
              className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl flex justify-between items-center
                         bg-black/30 backdrop-blur-md text-white text-sm shadow-md opacity-0 translate-y-4 
                         group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              style={{ cursor: 'pointer' }}
            >
              <span>{project.title}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GallerySection;
