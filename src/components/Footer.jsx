import React from 'react';
import { Mail, Globe, MessageCircle } from 'lucide-react';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className={`text-forpus-bg pt-20 pb-8 border-t transition-colors duration-500 ${
      isDark ? 'bg-forpus-dark border-forpus-gold/20' : 'bg-forpus-dark border-forpus-gold/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-8 mb-12 md:mb-16">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-2">
            <a href="#inicio" className="text-xl sm:text-2xl font-serif font-bold text-forpus-bg tracking-wide flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-forpus-gold">Φ</span> Forpus Tech
            </a>
            <p className="text-xs sm:text-sm text-forpus-bg/60 font-light max-w-sm mb-6 sm:mb-8 leading-relaxed">
              Agência de desenvolvimento de software dedicada a materializar ideias através da lógica impecável e design sofisticado.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="p-2 border border-forpus-bg/20 rounded-sm hover:border-forpus-gold hover:text-forpus-gold transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 border border-forpus-bg/20 rounded-sm hover:border-forpus-gold hover:text-forpus-gold transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="p-2 border border-forpus-bg/20 rounded-sm hover:border-forpus-gold hover:text-forpus-gold transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-forpus-gold mb-4 sm:mb-6 uppercase tracking-widest text-xs sm:text-sm">Navegação</h4>
            <ul className="space-y-3 sm:space-y-4 font-light text-xs sm:text-sm text-forpus-bg/80">
              <li><a href="#inicio" className="hover:text-forpus-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-forpus-gold transition-colors">Sobre a Empresa</a></li>
              <li><a href="#servicos" className="hover:text-forpus-gold transition-colors">Nossos Serviços</a></li>
              <li><a href="#portifolio" className="hover:text-forpus-gold transition-colors">Portfólio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-forpus-gold mb-4 sm:mb-6 uppercase tracking-widest text-xs sm:text-sm">Contato</h4>
            <ul className="space-y-3 sm:space-y-4 font-light text-xs sm:text-sm text-forpus-bg/80">
              <li className="flex items-center gap-3 overflow-hidden">
                <Mail size={16} className="text-forpus-gold shrink-0" />
                <a href="mailto:contatowellington1587@gmail.com" className="hover:text-forpus-gold transition-colors break-all">
                  contatowellington1587@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-forpus-gold" />
                <a href="https://wa.me/558799163274" target="_blank" rel="noopener noreferrer" className="hover:text-forpus-gold transition-colors">
                  +55 (87) 99163-2749
                </a>
              </li>
              <li className="pt-4">
                <a href="https://wa.me/558799163274?text=Olá%20Forpus%20Tech!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20um%20projeto." target="_blank" rel="noopener noreferrer" className="text-sm border-b border-forpus-gold text-forpus-gold pb-1 hover:text-white hover:border-white transition-colors">
                  Solicite um Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-forpus-bg/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-forpus-bg/40 font-light">
            &copy; {currentYear} Forpus Tech. Todos os direitos reservados.
          </p>
          <div className="text-center md:text-right">
            <p className="text-sm font-serif italic text-forpus-bg/60">
              "Ars sine scientia nihil est."
            </p>
            <p className="text-xs text-forpus-bg/40 mt-1 uppercase tracking-widest">
              (A arte sem o conhecimento não é nada)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
