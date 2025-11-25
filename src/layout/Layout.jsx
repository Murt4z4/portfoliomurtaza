import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const transitionVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Layout = ({ children }) => {
  const location = useLocation();
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [displayChildren, setDisplayChildren] = React.useState(children);
  const prevLocation = React.useRef(location.pathname);

  React.useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      setShowOverlay(true);
      setTimeout(() => {
        setDisplayChildren(children);
        setShowOverlay(false);
        prevLocation.current = location.pathname;
      }, 500); // Duration matches overlay fade
    } else {
      setDisplayChildren(children);
    }
  }, [location, children]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="h-full"
          >
            {displayChildren}
          </motion.div>
        </AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black pointer-events-none"
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

