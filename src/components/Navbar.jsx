import React, { useState, useEffect } from 'react';
import { Apple, ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const menuItems = [
    'Tienda', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 
    'AirPods', 'TV y Casa', 'Entretenimiento', 'Accesorios', 'Soporte'
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-white dark:bg-black' : 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/60'}`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center gap-8 z-50">
              <a href="#" className="text-black dark:text-white hover:opacity-80 transition-opacity">
                <Apple className="w-5 h-5" />
              </a>
              <div className="hidden md:flex items-center gap-8 text-xs text-[#1d1d1f] dark:text-[#f5f5f7] font-medium tracking-wide opacity-80">
                {['Tienda', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV y Casa', 'Entretenimiento'].map((item) => (
                  <a key={item} href="#" className="cursor-pointer hover:opacity-100 hover:text-black dark:hover:text-white transition-all duration-300">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-[#1d1d1f] dark:text-[#f5f5f7] z-50">
              <Search className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white transition-colors opacity-80 hover:opacity-100" />
              <div className="relative group" onClick={onOpenCart}>
                <ShoppingBag className="w-4 h-4 cursor-pointer hover:text-black dark:hover:text-white transition-colors opacity-80 hover:opacity-100" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
              <button 
                className="md:hidden cursor-pointer hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-0 left-0 w-full bg-white dark:bg-black z-40 pt-16 px-8 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 mt-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.04, duration: 0.3 }}
                  className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] py-3 border-b border-gray-100 dark:border-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
