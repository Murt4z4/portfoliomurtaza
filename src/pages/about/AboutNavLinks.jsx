import React from 'react';

const AboutNavLinks = ({ activeSection, onNavClick }) => {
  const navItems = [
    { id: 'about', label: "I’m Murtaza" },
    { id: 'expertise', label: 'Expertise' },
    { id: 'tools', label: 'Tool Stack' },
    { id: 'achievements', label: 'Achievements' },

  ];

  return (
    <nav className="md:flex hidden flex-col space-y-4 text-gray-300 text-sm font-medium sticky top-22 z-50 bg-transparent rounded-xl shadow-lg px-5 py-5">
      {navItems.map((item, idx) => (
        <span
          key={item.id}
          onClick={() => onNavClick(item.id)}
          className={`cursor-pointer hover:text-white transition-colors duration-200 ${activeSection === item.id ? 'text-white font-semibold' : ''}`}
          style={{ transitionDelay: `${idx * 50}ms` }}
        >
          {item.label}
        </span>
      ))}
    </nav>
  );
};

export default AboutNavLinks;
