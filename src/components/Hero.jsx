import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

const Hero = ({ isDark }) => {
  return (
    <section id="inicio" className={`relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 overflow-hidden ${
      isDark ? 'bg-forpus-dark' : 'bg-forpus-bg'
    }`}>
      {/* Subtle Background Elements */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-forpus-gold/5 rounded-full blur-3xl -z-10 pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-40 sm:w-64 h-full border-l -z-10 hidden md:block ${
        isDark ? 'border-forpus-gold/5' : 'border-forpus-brown/5'
      }`} />
      <div className={`absolute top-0 left-10 sm:left-20 w-px h-full -z-10 hidden md:block ${
        isDark ? 'bg-forpus-gold/5' : 'bg-forpus-brown/5'
      }`} />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border rounded-full mb-6 sm:mb-8 text-xs sm:text-xs ${
            isDark ? 'border-forpus-gold/30' : 'border-forpus-brown/20'
          }`}>
            <span className="w-2 h-2 rounded-full bg-forpus-gold animate-pulse"></span>
            <span className={`font-medium tracking-widest uppercase ${
              isDark ? 'text-forpus-gold' : 'text-forpus-brown'
            }`}>Forpus Tech</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-4 sm:mb-6 ${
            isDark ? 'text-forpus-bg' : 'text-forpus-dark'
          }`}>
            A Lógica Elevada <br className="hidden sm:block" />
            <span className={`italic ${isDark ? 'text-forpus-gold' : 'text-forpus-brown'}`}>à Arte Digital.</span>
          </h1>

          <p className={`text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-light ${
            isDark ? 'text-forpus-bg/70' : 'text-forpus-dark/70'
          }`}>
            Unindo a sabedoria clássica à inovação moderna. Transformamos ideias complexas em sistemas sob medida, sites de alta performance e aplicativos sólidos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a 
              href="#servicos" 
              className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-sm hover:transition-colors duration-300 flex items-center justify-center gap-2 group font-medium ${
                isDark 
                  ? 'bg-forpus-gold text-forpus-dark hover:bg-forpus-bg'
                  : 'bg-forpus-dark text-forpus-bg hover:bg-forpus-brown'
              }`}
            >
              Nossos Serviços
              <ArrowRight size={16} className="hidden sm:inline group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contato" 
              className={`w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base border rounded-sm transition-all duration-300 flex items-center justify-center gap-2 font-medium backdrop-blur-sm ${
                isDark 
                  ? 'border-forpus-gold/30 text-forpus-bg hover:border-forpus-gold/60 bg-forpus-gold/10'
                  : 'border-forpus-brown/30 text-forpus-dark hover:border-forpus-brown bg-white/50'
              }`}
            >
              <Code2 size={16} />
              Fale com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
