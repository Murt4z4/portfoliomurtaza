import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#101010] md:pt-20 pt-5 pb-10 w-full flex justify-center items-center">
      <div className="flex gap-2">
        <a href="mailto:hello@murtaza.work" className="bg-[#353535] text-white px-5 py-2 rounded-lg text-sm flex items-center font-medium hover:bg-[#444] transition">
          hello@murtaza.work
        </a>
        <a href="https://www.linkedin.com/in/murt4z4/" target="_blank" rel="noopener noreferrer" className="bg-[#353535] p-2 rounded-lg flex items-center hover:bg-[#444] transition">
          <img src="/icon.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
