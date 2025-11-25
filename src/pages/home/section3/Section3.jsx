import React from "react";
import { motion } from "framer-motion";
import "./Section3.css";

const testimonials = [
  {
    text: `Rob is a highly gifted designer whose work has significantly elevated our company's online presence. His creativity in developing engaging, impactful designs never ceased to amaze us, consistently adding the 'wow' effect that set our websites and branding apart. Though his contributions will be greatly missed, his talent is undeniable, and I have no doubt that he will continue to create remarkable digital experiences in his future endeavors.`,
    name: "Nicolás Arqueros",
    title: "CEO at Paima Studios & Milkomeda",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: `We worked with Robert in the early stages of our project. He was able to work with our messy vision to create an organized UX/UI flow that we could implement in our app. He was always on time and a great collaborator. Hope to work together again soon.`,
    name: "Jeffrey Morin",
    title: "CEO and Founder at Litesport",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: `I have worked with Robert on numerous occasions, and I hope I will be able to work with him in the future too. Robert is an extremely talented designer, with an eye for modern UI, but keeping things very balanced, without overdoing the current trends. He seems to be a step ahead of the trends and to create timeless designs at the same time. He did a wonderful job working with us when developing the Plum Village App. You can google it and install it on your phone if you want to see Robert's designs in action. Much recommended!`,
    name: "Catalin Zorzini",
    title: "Plum Village",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const Section3 = () => {
  return (
    <motion.section
      className="testimonial-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h2 className="testimonial-title px-4 py-6 md:px-16 md:py-6 ">What Clients Say About Working With Me</h2>
      <div className="testimonial-marquee">
        <div className="testimonial-track">
          {testimonials.concat(testimonials).map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-user">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-title-role">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Section3;
