import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Performance from './components/Performance';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const addToCart = () => {
    const newItem = {
      name: "MacBook Air 13''",
      specs: "Chip M4, 8GB RAM, 256GB SSD",
      price: 1099,
      image: "https://www.apple.com/v/macbook-air/w/images/overview/design/design_hero_endframe__olurq95457m6_large.jpg"
    };
    setCartItems([...cartItems, newItem]);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  const removeFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="bg-white min-h-screen text-[#1d1d1f] font-sans selection:bg-blue-500/30">
      <Navbar cartCount={cartItems.length} onOpenCart={() => setIsCartOpen(true)} />
      <main>
        <Hero onBuy={addToCart} />
        <Features />
        <Performance />
      </main>
      <Footer />

      {/* Cart Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <Cart 
            isOpen={isCartOpen} 
            onClose={() => setIsCartOpen(false)} 
            items={cartItems} 
            onRemove={removeFromCart}
          />
        )}
      </AnimatePresence>

      {/* Cart Notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-[#1d1d1f]/90 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsCartOpen(true)}
          >
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Añadido a la bolsa</p>
              <p className="text-sm text-gray-300">Ver bolsa ({cartItems.length})</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
