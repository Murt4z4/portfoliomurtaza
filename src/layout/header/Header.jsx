import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonGroupRef = useRef(null);
  const [dropdownWidth, setDropdownWidth] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Work', 'About'];
  const contactItem = 'Contact';
  const primaryDropdown = ['Testimonials', 'Resume'];
  const socialLinks = ['Linkedin'];

  useEffect(() => {
    const handleResize = () => {
      if (buttonGroupRef.current) {
        setDropdownWidth(buttonGroupRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("section4");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      // Add a timestamp to force state update
      navigate("/", { state: { scrollTo: "section4", ts: Date.now() } });
    }
  };

  return (
    <div
      className={`px-8 py-6 md:py-6 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm bg-transparent' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center text-white">
        {/* Profile Image */}
        <div>
          <Link to="/">
            <img
              src="/rovamo.jfif"
              alt="Profile"
              className="w-10 h-10 left-20 rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Right Section */}
        <div className="relative" ref={buttonGroupRef}>
          <div className="flex space-x-3 items-center">
            {/* Desktop nav items */}
            <div className="hidden md:flex space-x-3">
              {navItems.map((item, index) => (
                item === 'Work' ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={index}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-[#303030] text-white hover:bg-zinc-700 transition"
                  >
                    <Link to="/work">{item}</Link>
                  </motion.div>
                ) : item === 'About' ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={index}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition"
                  >
                    <Link to="/about">{item}</Link>
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={index}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 transition"
                  >
                    {item}
                  </motion.div>
                )
              ))}

              {/* Desktop Upwork Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.upwork.com/freelancers/~011bb3aa35b3bd5e52"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                Invite me on Upwork <span className="text-base">↗</span>
              </motion.a>
            </div>

            {/* Contact */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="px-4 py-2 rounded-md text-sm cursor-pointer font-medium bg-white text-black"
              onClick={handleContactClick}
            >
              {contactItem}
            </motion.button>

            {/* Hamburger - Show on mobile */}
            <button
              className="md:hidden bg-zinc-800 p-2 rounded-md w-9 h-9 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Animated Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-14 right-0 bg-zinc-900/95 backdrop-blur-lg rounded-md shadow-lg p-4 space-y-3 z-10"
                style={{
                  width:
                    typeof window !== 'undefined' && window.innerWidth >= 768
                      ? dropdownWidth
                      : '280px',
                }}
              >
                {/* Mobile nav items */}
                <div className="md:hidden space-y-2">
                  {navItems.map((item, idx) => (
                    item === 'Work' ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        key={idx}
                        className="bg-zinc-800 text-white px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition"
                      >
                        <Link to="/work" onClick={() => setMenuOpen(false)}>{item}</Link>
                      </motion.div>
                    ) : item === 'About' ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        key={idx}
                        className="bg-zinc-800 text-white px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition"
                      >
                        <Link to="/about" onClick={() => setMenuOpen(false)}>{item}</Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        key={idx}
                        className="bg-zinc-800 text-white px-4 py-2 rounded-md font-medium hover:bg-zinc-700 transition"
                      >
                        {item}
                      </motion.div>
                    )
                  ))}
                </div>

                {/* Mobile Upwork Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="https://www.upwork.com/freelancers/~011bb3aa35b3bd5e52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#343434] hover:bg-[#444] text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Invite me on Upwork <span className="text-base">↗</span>
                </motion.a>

                {/* Primary Dropdown */}
                {/* {primaryDropdown.map((item, idx) => (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={idx}
                    className="px-4 py-2 rounded-md text-sm font-medium bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <span>{item}</span>
                      {item === 'Resume' && (
                        <ArrowUpRight size={14} />
                      )}
                    </div>
                  </motion.div>
                ))} */}

                {/* Social Links */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="px-4 text-sm font-medium bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition py-2 rounded-md cursor-pointer space-y-2"
                >
                  <a 
                    href="https://www.linkedin.com/in/murt4z4/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex justify-between items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Linkedin</span>
                    <ArrowUpRight size={14} />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
};

export default Header;