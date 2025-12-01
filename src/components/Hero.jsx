import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({ onBuy }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-[150vh] bg-[#f5f5f7] overflow-hidden flex flex-col items-center pt-24 md:pt-32">
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center z-10 px-4 mb-8 md:mb-12 md:sticky md:top-32"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#1d1d1f] mb-4 tracking-tight"
        >
          MacBook Air
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl font-medium text-[#1d1d1f]"
        >
          Alucinante. Atrae todas las miradas.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8 items-center"
        >
          <button 
            onClick={onBuy}
            className="bg-[#0071e3] text-white px-6 py-2.5 rounded-full text-[17px] font-normal hover:bg-[#0077ed] transition-all active:scale-95 w-full sm:w-auto min-w-[120px]"
          >
            Comprar
          </button>
          <button className="text-[#0066cc] text-[21px] font-normal hover:underline flex items-center justify-center gap-1 w-full sm:w-auto group">
            Más información <span className="text-xl group-hover:translate-x-0.5 transition-transform">›</span>
          </button>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ y: imageY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-[1400px] px-4 md:px-8 mt-12 md:mt-32 z-20 pb-12 md:pb-0 mx-auto"
      >
        <img 
          src="https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-2-up-hero-240304_big.jpg.medium_2x.jpg" 
          alt="MacBook Air M3" 
          className="w-full h-auto max-h-[85vh] object-contain drop-shadow-2xl mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
