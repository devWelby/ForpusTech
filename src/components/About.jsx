import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Eye, Cpu } from 'lucide-react';

const About = ({ isDark }) => {
  const pillars = [
    {
      icon: <Scale className="w-6 h-6 text-forpus-gold" />,
      title: "Lógica",
      description: "A base de todo sistema robusto. Desenvolvemos com foco na razão, garantindo código limpo, escalável e arquiteturas sólidas."
    },
    {
      icon: <Eye className="w-6 h-6 text-forpus-gold" />,
      title: "Estética",
      description: "A harmonia visual. Projetamos interfaces minimalistas que elevam a experiência do usuário a um padrão de beleza clássica."
    },
    {
      icon: <Cpu className="w-6 h-6 text-forpus-gold" />,
      title: "Funcionalidade",
      description: "O propósito final. Criamos soluções que não apenas existem, mas resolvem problemas reais com eficiência e precisão."
    }
  ];

  return (
    <section id="sobre" className={`py-16 sm:py-20 md:py-32 relative ${
      isDark ? 'bg-forpus-dark' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6 sm:space-y-8"
          >
            <div>
              <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-forpus-gold uppercase mb-2 sm:mb-3">Nossa Fundação</h2>
              <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif ${
                isDark ? 'text-forpus-bg' : 'text-forpus-dark'
              }`}>Sabedoria Prática <br/>e Excelência.</h3>
            </div>
            
            <div className={`space-y-4 sm:space-y-6 font-light leading-relaxed text-sm sm:text-base ${
              isDark ? 'text-forpus-bg/80' : 'text-forpus-dark/80'
            }`}>
              <p>
                A Forpus Tech nasce com a bagagem de 3 anos de experiência prática e sólida no mercado de tecnologia. Nosso fundador, Wellington, construiu uma trajetória de soluções eficazes, que agora é elevada a um novo padrão de excelência profissional e institucional.
              </p>
              <p>
                Inspirados pela filosofia grega clássica, acreditamos que o desenvolvimento de software não é apenas digitação de códigos, mas uma arte de construir pensamento lógico materializado. Cada projeto é tratado como uma obra atemporal.
              </p>
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          >
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className={`p-5 sm:p-6 lg:p-8 border rounded-sm transition-colors duration-500 ${
                  isDark
                    ? 'border-forpus-gold/10 bg-forpus-dark/50 hover:border-forpus-gold/30'
                    : 'border-forpus-brown/10 bg-forpus-bg hover:border-forpus-gold/50'
                } ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className={`mb-4 sm:mb-5 p-2 sm:p-3 inline-block rounded-sm shadow-sm border ${
                  isDark
                    ? 'bg-forpus-dark border-forpus-gold/20'
                    : 'bg-white border-forpus-brown/5'
                }`}>
                  {pillar.icon}
                </div>
                <h4 className={`text-lg sm:text-xl font-serif mb-2 sm:mb-3 ${
                  isDark ? 'text-forpus-gold' : 'text-forpus-brown'
                }`}>{pillar.title}</h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-forpus-bg/70' : 'text-forpus-dark/70'
                }`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
