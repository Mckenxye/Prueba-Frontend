import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Battery, Brain } from 'lucide-react';

const Performance = () => {
  return (
    <section className="py-24 md:py-32 bg-white dark:bg-black text-[#1d1d1f] dark:text-[#f5f5f7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-7xl font-bold mb-8 tracking-tight"
            >
              Chip M4. <br />
              <span className="text-[#86868b] dark:text-[#a1a1a6]">Una potencia que fluye.</span>
            </motion.h2>
            <p className="text-xl text-[#1d1d1f] dark:text-[#f5f5f7] mb-12 leading-relaxed font-medium">
              El chip M4 trae un nuevo nivel de eficiencia y velocidad. Con el Neural Engine optimizado para Apple Intelligence, todo es instantáneo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f5f5f7] dark:bg-[#1d1d1f] p-6 rounded-3xl border border-white/50 dark:border-white/10 hover:shadow-lg transition-all duration-300"
                >
                    <Brain className="w-8 h-8 text-purple-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Apple Intelligence</h4>
                    <p className="text-sm text-[#86868b] dark:text-[#a1a1a6] font-medium">Diseñado para la IA desde el silicio. Personal, privado, potente.</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#f5f5f7] dark:bg-[#1d1d1f] p-6 rounded-3xl border border-white/50 dark:border-white/10 hover:shadow-lg transition-all duration-300"
                >
                    <Battery className="w-8 h-8 text-green-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Batería para todo el día</h4>
                    <p className="text-sm text-[#86868b] dark:text-[#a1a1a6] font-medium">Hasta 18 horas de autonomía. Olvídate del enchufe.</p>
                </motion.div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-12">
            {/* Chart 1 */}
            <div>
              <div className="flex justify-between text-sm font-medium text-[#86868b] dark:text-[#a1a1a6] mb-2">
                <span>Rendimiento CPU</span>
                <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">1.5x Más Rápido</span>
              </div>
              <div className="h-4 bg-[#f5f5f7] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
              <div className="mt-2 text-xs text-[#86868b] text-right font-medium">M4</div>
              
              <div className="h-4 bg-[#f5f5f7] rounded-full overflow-hidden mt-2 w-2/3">
                <div className="h-full bg-[#d2d2d7] rounded-full" />
              </div>
              <div className="mt-2 text-xs text-[#86868b] text-right w-2/3 font-medium">M3</div>
            </div>

            {/* Chart 2 */}
            <div>
              <div className="flex justify-between text-sm font-medium text-[#86868b] mb-2">
                <span>Gráficos (GPU)</span>
                <span className="text-[#1d1d1f]">2x Más Rápido</span>
              </div>
              <div className="h-4 bg-[#f5f5f7] rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                />
              </div>
              <div className="mt-2 text-xs text-[#86868b] text-right font-medium">M4</div>
              
              <div className="h-4 bg-[#f5f5f7] rounded-full overflow-hidden mt-2 w-1/2">
                <div className="h-full bg-[#d2d2d7] rounded-full" />
              </div>
              <div className="mt-2 text-xs text-[#86868b] text-right w-1/2 font-medium">M3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
