import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Database } from 'lucide-react';

const Services = ({ isDark }) => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-forpus-gold" />,
      title: "Criação de Sites",
      description: "Sites institucionais e landing pages de alta conversão. Combinamos um design elegante com performance e SEO para destacar a presença digital da sua marca."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-forpus-gold" />,
      title: "Desenvolvimento de Aplicativos",
      description: "Aplicativos mobile responsivos e intuitivos. Criamos experiências fluídas para iOS e Android que mantêm seus usuários engajados e satisfeitos."
    },
    {
      icon: <Database className="w-8 h-8 text-forpus-gold" />,
      title: "Sistemas Sob Medida",
      description: "Automação de processos, dashboards interativos e gestão empresarial. Construímos a infraestrutura lógica que impulsiona o seu negócio internamente."
    }
  ];

  return (
    <section id="servicos" className={`py-16 sm:py-20 md:py-32 relative transition-colors duration-500 ${
      isDark ? 'bg-forpus-dark border-t border-forpus-gold/5' : 'bg-forpus-bg border-t border-forpus-brown/5'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xs sm:text-sm font-semibold tracking-widest text-forpus-gold uppercase mb-2 sm:mb-3">O Que Fazemos</h2>
          <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 ${
            isDark ? 'text-forpus-bg' : 'text-forpus-dark'
          }`}>Nossas Disciplinas.</h3>
          <p className={`font-light text-sm sm:text-base md:text-lg ${
            isDark ? 'text-forpus-bg/70' : 'text-forpus-dark/70'
          }`}>
            Da fundação visual à estrutura lógica, oferecemos soluções tecnológicas completas projetadas para durar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group p-6 sm:p-8 lg:p-10 border rounded-sm hover:shadow-xl transition-all duration-500 ${
                isDark
                  ? 'bg-forpus-dark border-forpus-gold/10 hover:border-forpus-gold/30 shadow-lg shadow-forpus-gold/5'
                  : 'bg-white border-forpus-brown/5 hover:border-forpus-brown/20 shadow-sm'
              }`}
            >
              <div className={`mb-6 sm:mb-8 p-3 sm:p-4 inline-block rounded-sm transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110 ${
                isDark ? 'bg-forpus-dark/50' : 'bg-forpus-bg'
              }`}>
                {service.icon}
              </div>
              <h4 className={`text-lg sm:text-xl lg:text-2xl font-serif mb-3 sm:mb-4 ${
                isDark ? 'text-forpus-gold' : 'text-forpus-brown'
              }`}>{service.title}</h4>
              <p className={`text-sm sm:text-base font-light leading-relaxed ${
                isDark ? 'text-forpus-bg/70' : 'text-forpus-dark/70'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
