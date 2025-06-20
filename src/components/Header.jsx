'use client';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-yellow-100 shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative h-16">
        
        {/* Left: Mobile Menu Icon + Logo */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="block lg:hidden" aria-label="Abrir menu">
            <Bars3Icon className="h-6 w-6 text-red-700" />
          </button>

          {/* Logo (visível sempre) */}
          <img
            src="/images/logo.png"
            alt="Pedido Agora"
            className="h-16 w-auto"
          />
        </div>

        {/* Center: Desktop Menu */}
        <nav className="hidden lg:flex justify-center flex-1 space-x-[70px] text-red-700 font-semibold text-xl">
          <a href="#">Início</a>
          <a href="#">Combos</a>
          <a href="#">Bebidas</a>
          <a href="#">Promoções</a>
        </nav>

        {/* Right: User Icon */}
        <div className="flex justify-end flex-1">
          <UserCircleIcon className="h-16 w-10 text-red-700" />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-2 text-red-700 font-semibold text-center">
          <a href="#" onClick={toggleMenu}>Início</a>
          <a href="#" onClick={toggleMenu}>Combos</a>
          <a href="#" onClick={toggleMenu}>Bebidas</a>
          <a href="#" onClick={toggleMenu}>Promoções</a>
        </div>
      )}
    </header>
  );
}