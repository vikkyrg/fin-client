import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTopButton Component
 * Floating button positioned in the bottom-right corner of the website.
 * Smoothly scrolls the viewport back to the top when clicked.
 * Automatically appears once the user scrolls down 300px.
 */
const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-full bg-[#174A8B] hover:bg-[#F28C28] text-white shadow-xl shadow-blue-950/25 border-2 border-white/80 transition-all duration-300 transform active:scale-90 group focus:outline-none focus:ring-4 focus:ring-blue-300/50 ${
        visible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default BackToTopButton;
