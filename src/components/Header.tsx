import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = ({ isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isDark
          ? isScrolled ? 'bg-forpus-dark/90 backdrop-blur-md border-forpus-gold/10 py-3' : 'bg-transparent border-transparent py-5'
          : isScrolled ? 'bg-forpus-bg/90 backdrop-blur-md border-forpus-brown/10 py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#inicio" className={`text-2xl font-serif font-bold tracking-wide flex items-center gap-2 ${
          isDark ? 'text-forpus-gold' : 'text-forpus-brown'
        }`}>
          <span className="text-forpus-gold">Φ</span> Forpus Tech
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-forpus-gold transition-colors duration-300 ${
                isDark ? 'text-forpus-bg' : 'text-forpus-dark'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            className={`px-5 py-2 border rounded-sm text-sm font-medium transition-all duration-300 ${
              isDark 
                ? 'border-forpus-gold text-forpus-gold hover:bg-forpus-gold hover:text-forpus-dark'
                : 'border-forpus-brown text-forpus-brown hover:bg-forpus-brown hover:text-forpus-bg'
            }`}
          >
            Inicie seu Projeto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden focus:outline-none ${
            isDark ? 'text-forpus-gold' : 'text-forpus-brown'
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-full left-0 w-full backdrop-blur-lg shadow-lg md:hidden ${
              isDark
                ? 'bg-forpus-dark/95 border-b border-forpus-gold/10'
                : 'bg-forpus-bg/95 border-b border-forpus-brown/10'
            }`}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium hover:text-forpus-gold transition-colors ${
                    isDark ? 'text-forpus-bg' : 'text-forpus-dark'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-2 border rounded-sm transition-all duration-300 ${
                  isDark 
                    ? 'border-forpus-gold text-forpus-gold hover:bg-forpus-gold hover:text-forpus-dark'
                    : 'border-forpus-brown text-forpus-brown hover:bg-forpus-brown hover:text-forpus-bg'
                }`}
              >
                Inicie seu Projeto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
