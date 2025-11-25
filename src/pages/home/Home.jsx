import React from 'react';
import Layout from '../../layout/Layout';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
// import Section3 from './section3/Section3';
import Section4 from './section4/Section4';
import { motion } from 'framer-motion';

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
      // Clear state after scrolling so it doesn't scroll again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Section1 />
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.20 }}
      >
        <Section2 />
      </motion.div>
      {/** Reviews/Testimonials temporarily disabled **/}
      {/**
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Section3 />
      </motion.div>
      **/}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Section4 />
      </motion.div>
    </Layout>
  );
};

export default Home;
