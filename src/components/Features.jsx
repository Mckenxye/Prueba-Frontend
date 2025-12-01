import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Battery, Monitor, Brain } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    variants={item}
    className="relative overflow-hidden bg-white dark:bg-[#1d1d1f] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 dark:border-gray-800"
  >
    <div className="relative z-10">
      <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl w-fit group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
        <Icon className="w-8 h-8 text-[#0071e3] dark:text-[#2997ff]" />
      </div>
      <h3 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">{title}</h3>
      <p className="text-[#86868b] dark:text-[#a1a1a6] leading-relaxed text-lg font-medium">{description}</p>
    </div>
  </motion.div>
);

const Features = () => {
  return (
    <section className="py-24 md:py-32 bg-[#f5f5f7] dark:bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 tracking-tight">
            Va rápido. <br />
            <span className="text-[#86868b] dark:text-[#a1a1a6]">Llega lejos.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#1d1d1f] dark:text-[#f5f5f7] max-w-3xl mx-auto leading-relaxed font-medium">
            El MacBook Air vuela en el trabajo y en el juego, y el chip M4 trae capacidades aún mayores y funciones avanzadas de IA a este portátil superportátil.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8"
        >
          <FeatureCard 
            icon={Zap}
            title="Superpotenciado con M4"
            description="Consigue un rendimiento hasta 1,6 veces más rápido que el M1 para todo, desde editar vídeo hasta jugar."
          />
          <FeatureCard 
            icon={Brain}
            title="Diseñado para Apple Intelligence"
            description="Personal, privado, potente. El Neural Engine hace que las tareas de IA vuelen manteniendo tus datos seguros."
          />
          <FeatureCard 
            icon={Battery}
            title="Hasta 18 horas de batería"
            description="Aguanta todo el día y parte de la noche. Deja el cargador en casa."
          />
          <FeatureCard 
            icon={Monitor}
            title="Pantalla Liquid Retina"
            description="La pantalla Liquid Retina de 13,6 pulgadas admite mil millones de colores para imágenes vibrantes y un detalle increíble."
          />
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Productividad desatada.</h3>
              <p className="text-[#86868b] font-medium">Excel, Slack y todo lo que necesitas, a la velocidad del rayo.</p>
            </div>
            <img 
              src="https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-Excel-Slack-240304_big.jpg.medium_2x.jpg" 
              alt="Productivity Apps" 
              className="w-full h-auto object-cover mt-4 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
          >
            <div className="p-8 pb-0">
              <h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Creatividad sin límites.</h3>
              <p className="text-[#86868b] font-medium">Edita vídeo 4K y diseña sin esfuerzo con el poder del M4.</p>
            </div>
            <img 
              src="https://www.apple.com/newsroom/images/2024/03/apple-unveils-the-new-13-and-15-inch-macbook-air-with-the-powerful-m3-chip/article/Apple-MacBook-Air-Final-Cut-Pro-Stage-Manager-Pixelmator-240304_big.jpg.medium_2x.jpg" 
              alt="Creative Apps" 
              className="w-full h-auto object-cover mt-4 transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
