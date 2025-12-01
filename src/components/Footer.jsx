import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-black text-[#86868b] dark:text-[#a1a1a6] py-12 border-t border-gray-200 dark:border-gray-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Descubrir y Comprar</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Tienda</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Cuenta</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Gestionar ID de Apple</a></li>
              <li><a href="#" className="hover:underline">Cuenta del Apple Store</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Buscar una tienda</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold mb-4">Acerca de Apple</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Directivos de Apple</a></li>
              <li><a href="#" className="hover:underline">Oportunidades de empleo</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2025 Apple Inc. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">Política de privacidad</a>
            <a href="#" className="hover:underline">Términos de uso</a>
            <a href="#" className="hover:underline">Ventas y reembolsos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
