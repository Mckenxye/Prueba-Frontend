import React, { useState } from 'react';
import { X, ChevronRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ isOpen, onClose, items, onRemove }) => {
  const [step, setStep] = useState(1); // 1: Cart, 2: Shipping, 3: Payment

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />

      {/* Cart Panel */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-md bg-white dark:bg-[#1d1d1f] h-full shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-[#1d1d1f] z-10">
          <h2 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">
            {step === 1 && 'Tu Bolsa'}
            {step === 2 && 'Envío'}
            {step === 3 && 'Pago'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content - Pagination/Steps */}
        <div className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {items.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    Tu bolsa está vacía.
                  </div>
                ) : (
                  items.map((item, index) => (
                    <div key={index} className="flex gap-4 py-4 border-b border-gray-100">
                      <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center">
                        <img src={item.image} alt={item.name} className="w-16 h-auto object-contain" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-[#1d1d1f]">{item.name}</h3>
                          <button onClick={() => onRemove(index)} className="text-gray-400 hover:text-red-500">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.specs}</p>
                        <p className="text-[#1d1d1f] font-medium mt-2">${item.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))
                )}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <h3 className="font-medium text-[#1d1d1f]">Dirección de envío</h3>
                  <input type="text" placeholder="Nombre completo" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  <input type="text" placeholder="Dirección" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Ciudad" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                    <input type="text" placeholder="Código Postal" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">¡Pedido Confirmado!</h3>
                  <p className="text-green-600 text-sm">Gracias por tu compra. Recibirás un email con los detalles.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer / Controls */}
        {items.length > 0 && step < 3 && (
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Impuestos</span>
                <span>${tax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold text-[#1d1d1f] pt-2 border-t border-gray-200">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
            </div>
            
            <button 
              onClick={() => setStep(step + 1)}
              className="w-full bg-[#0071e3] text-white py-4 rounded-xl font-medium text-lg hover:bg-[#0077ed] transition-colors flex items-center justify-center gap-2"
            >
              {step === 1 ? 'Pagar' : 'Confirmar Pedido'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
        
        {/* Pagination Dots */}
        <div className="p-4 flex justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-2 h-2 rounded-full transition-colors ${step === s ? 'bg-[#1d1d1f]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;