import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, ChevronRight, Copy } from 'lucide-react';

const ChatWidget = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [showFAQ, setShowFAQ] = useState(true);
  const [chatHistory, setChatHistory] = useState([
    { type: 'bot', text: 'Olá! 👋 Bem-vindo à Forpus Tech. Como posso ajudá-lo hoje?' }
  ]);

  // Estimator conversational state
  const [estimatorActive, setEstimatorActive] = useState(false);
  const [estimatorStep, setEstimatorStep] = useState(0);
  const [estimatorData, setEstimatorData] = useState({
    projectType: '',
    complexity: '',
    urgency: '',
    email: '',
    description: '',
  });

  // Base de conhecimento com respostas inteligentes
  const knowledgeBase = {
    servicos: {
      keywords: ['serviço', 'você faz', 'oferecem', 'oferece', 'qual serviço', 'quais serviços', 'o que vocês fazem', 'especialidade'],
      response: 'Oferecemos três principais disciplinas:\n\n🎨 **Criação de Sites** - Sites institucionais e landing pages de alta conversão com design elegante, performance otimizada e SEO.\n\n📱 **Desenvolvimento de Aplicativos** - Aplicativos mobile responsivos para iOS e Android com experiência fluida.\n\n🗄️ **Sistemas Sob Medida** - Automação de processos, dashboards interativos e soluções empresariais personalizadas.\n\nQual desses serviços te interessa?'
    },
    valores: {
      keywords: ['valor', 'preço', 'custa', 'quanto custa', 'tabela de preço', 'preços', 'orçamento'],
      response: 'Cada projeto é único com requisitos e escopo específicos! 💡\n\nNão temos tabela de preços fixa pois cada solução é personalizada. O valor depende de:\n• Complexidade do projeto\n• Tecnologias utilizadas\n• Tempo de desenvolvimento\n• Suporte pós-lançamento\n\nRecomendo solicitar um orçamento! Clique em "Solicite um Orçamento" para enviar seus requisitos via WhatsApp e nossa equipe fará uma avaliação detalhada.'
    },
    tempo: {
      keywords: ['quanto tempo', 'quanto demora', 'prazo', 'quando fica pronto', 'tempo de entrega', 'prazos'],
      response: 'O prazo varia conforme a complexidade do projeto 🕐\n\n⚡ **Landing Page**: 2-4 semanas\n🌐 **Website Institucional**: 4-8 semanas\n📱 **App Mobile**: 8-16 semanas\n🗄️ **Sistema Sob Medida**: 6-24 semanas\n\nEsses são prazos estimados. Após análise do seu projeto, faremos um cronograma realista e personalizado. Quer discutir seu projeto?'
    },
    tecnologias: {
      keywords: ['tecnologia', 'linguagem', 'framework', 'qual tecnologia', 'quais tecnologias', 'react', 'node', 'python', 'stack'],
      response: 'Utilizamos as **melhores tecnologias** do mercado:\n\n💻 **Frontend**: React, Vue.js, Next.js, Tailwind CSS\n⚙️ **Backend**: Node.js, Python, PostgreSQL, MongoDB\n📱 **Mobile**: React Native, Flutter\n☁️ **Cloud**: AWS, Vercel, Digital Ocean\n\nEscolhemos a stack ideal para cada projeto, considerando requisitos, performance e manutenibilidade. Temos alguma preferência tecnológica?'
    },
    experiencia: {
      keywords: ['experiência', 'quanto tempo', 'anos', 'portfólio', 'projetos anteriores', 'histórico', 'quem é vocês', 'sobre'],
      response: 'A **Forpus Tech** nasce com 3 anos de experiência prática e sólida no mercado! 🏆\n\nNosso fundador, **Wellington**, construiu uma trajetória de soluções eficazes e inovadoras. Inspirados pela filosofia grega clássica, acreditamos que o desenvolvimento de software é uma arte de construir pensamento lógico materializado.\n\nNossos três pilares:\n✓ **Lógica** - Código robusto e escalável\n✓ **Estética** - Design minimalista e elegante\n✓ **Funcionalidade** - Soluções que resolvem problemas reais\n\nCada projeto é tratado como uma obra atemporal!'
    },
    contato: {
      keywords: ['contato', 'falar', 'entrar em contato', 'como falar', 'telefone', 'email', 'whatsapp'],
      response: '📞 **Entre em contato conosco:**\n\n📧 **Email**: contatowellington1587@gmail.com\n💬 **WhatsApp**: +55 (87) 99163-2749\n\nPode enviar uma mensagem no WhatsApp ou enviar um email com seus requisitos que responderemos em breve! Nossa equipe está pronta para ajudar.'
    },
    manutencao: {
      keywords: ['manutenção', 'suporte', 'depois do lançamento', 'pós-lançamento', 'atualizações', 'correções', 'bugs', 'problema'],
      response: 'Oferecemos **suporte pós-lançamento** completo! 🛠️\n\n✓ Correção de bugs\n✓ Atualizações de segurança\n✓ Melhorias de performance\n✓ Adicionar novas funcionalidades\n✓ Backup e monitoramento\n\nO suporte pode ser contratado em diferentes modalidades:\n• **Suporte Técnico**: Resoluções rápidas\n• **Manutenção Preventiva**: Atualizações regulares\n• **Contrato de Suporte**: Pacote customizado\n\nVocê pode escolher a que melhor se adequa!'
    },
    prazos: {
      keywords: ['rush', 'urgente', 'rápido', 'acelerado'],
      response: 'Entendemos urgências! ⏰\n\nPodemos otimizar prazos em certos cenários, dependendo da complexidade. Projetos mais simples podem ser acelerados, mas mantemos nosso padrão de qualidade.\n\nConsideramos:\n• Tamanho do projeto\n• Recursos disponíveis\n• Possíveis compromissos\n\nPara discutir um timeline acelerado, contate-nos via WhatsApp!'
    },
    default: {
      response: 'Ótima pergunta! 🤔\n\nParece que preciso de mais contexto ou sua dúvida é específica. Deixe-me oferecer algumas perguntas frequentes que posso responder:\n\nEscolha uma opção acima ou envie mais detalhes sobre sua dúvida!'
    }
  };

  // Perguntas frequentes
  const faqs = [
    { question: '🎨 Quais serviços vocês oferecem?', key: 'servicos' },
    { question: '💰 Qual é o valor?', key: 'valores' },
    { question: '⏱️ Quanto tempo demora?', key: 'tempo' },
    { question: '💻 Que tecnologias usam?', key: 'tecnologias' },
    { question: '🏢 Quem é a Forpus Tech?', key: 'experiencia' },
    { question: '📞 Como entrar em contato?', key: 'contato' },
    { question: '🧮 Solicitar Orçamento', key: 'estimator' },
  ];

  // Função para encontrar resposta baseada em palavras-chave
  const findResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.keywords) {
        for (const keyword of data.keywords) {
          if (lowerMessage.includes(keyword)) {
            return data.response;
          }
        }
      }
    }
    
    return knowledgeBase.default.response;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = message.trim();
    setChatHistory(prev => [...prev, { type: 'user', text: userMsg }]);
    setShowFAQ(false);
    setMessage('');

    // If estimator conversational flow is active, delegate
    if (estimatorActive) {
      setTimeout(() => handleEstimatorReply(userMsg), 400);
      return;
    }

    // Simula digitação para respostas padrão
    setTimeout(() => {
      const botResponse = findResponse(userMsg);
      setChatHistory(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 800);
  };

  const handleEstimatorReply = (userMsg) => {
    const normalize = (s) => s.trim().toLowerCase();

    const parseProjectType = (s) => {
      const t = normalize(s);
      if (t.includes('landing')) return 'Landing Page';
      if (t.includes('site') || t.includes('website')) return 'Website';
      if (t.includes('app') || t.includes('mobile')) return 'Mobile App';
      if (t.includes('sistema') || t.includes('custom') || t.includes('personalizado')) return 'Custom System';
      return s.charAt(0).toUpperCase() + s.slice(1);
    };

    const parseComplexity = (s) => {
      const t = normalize(s);
      if (t.includes('low') || t.includes('baixo') || t.includes('baixa')) return 'Low';
      if (t.includes('high') || t.includes('alto') || t.includes('alta')) return 'High';
      return 'Medium';
    };

    const parseUrgency = (s) => {
      const t = normalize(s);
      if (t.includes('rush') || t.includes('urg') || t.includes('urgente')) return 'Rush';
      if (t.includes('accel') || t.includes('acel') || t.includes('rápido') || t.includes('rapido') || t.includes('acelerado')) return 'Accelerated';
      return 'Normal';
    };

    if (estimatorStep === 1) {
      const projectType = parseProjectType(userMsg);
      setEstimatorData(d => ({ ...d, projectType }));
      setEstimatorStep(2);
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Entendido. Qual o nível de complexidade? (Baixa / Média / Alta)' }]);
      return;
    }

    if (estimatorStep === 2) {
      const complexity = parseComplexity(userMsg);
      setEstimatorData(d => ({ ...d, complexity }));
      setEstimatorStep(3);
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Ótimo. Qual a urgência do projeto? (Normal / Acelerado / Urgente)' }]);
      return;
    }

    if (estimatorStep === 3) {
      const urgency = parseUrgency(userMsg);
      setEstimatorData(d => ({ ...d, urgency }));
      setEstimatorStep(4);
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Pode me passar um email para contato? (opcional - digite "pular" para omitir)' }]);
      return;
    }

    if (estimatorStep === 4) {
      const email = userMsg.trim().toLowerCase() === 'pular' ? '' : userMsg.trim();
      setEstimatorData(d => ({ ...d, email }));
      setEstimatorStep(5);
      setChatHistory(prev => [...prev, { type: 'bot', text: 'Descreva brevemente o seu projeto (funcionalidades principais, público-alvo).' }]);
      return;
    }

    if (estimatorStep === 5) {
      const description = userMsg.trim();
      const data = { ...estimatorData, description };
      setEstimatorData(data);

      // compute estimate
      const basePrices = {
        'Landing Page': 2000,
        Website: 5000,
        'Mobile App': 15000,
        'Custom System': 10000,
      };
      const complexityMult = { Low: 0.8, Medium: 1, High: 1.6 };
      const urgencyMult = { Normal: 1, Accelerated: 1.25, Rush: 1.6 };

      const base = basePrices[data.projectType] ?? 5000;
      const low = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 0.9);
      const high = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 1.25);

      const summary = `Estimativa rápida Forpus Tech\nTipo: ${data.projectType}\nComplexidade: ${data.complexity}\nUrgência: ${data.urgency}\nFaixa: R$ ${low.toLocaleString()} - R$ ${high.toLocaleString()}\nEmail: ${data.email || '—'}\nDescrição: ${data.description || '—'}`;

      setChatHistory(prev => [...prev, { type: 'bot', text: 'Obrigado! Aqui está uma estimativa inicial:' }, { type: 'bot', text: summary }, { type: 'bot', text: 'Digite "enviar" para enviar via WhatsApp, "copiar" para copiar o resumo, ou "novo" para gerar outra estimativa.' }]);
      setEstimatorStep(6);
      return;
    }

    if (estimatorStep === 6) {
      const cmd = userMsg.trim().toLowerCase();
      if (cmd === 'enviar' || cmd === 'send') {
        const data = estimatorData;
        const basePrices = { 'Landing Page': 2000, Website: 5000, 'Mobile App': 15000, 'Custom System': 10000 };
        const complexityMult = { Low: 0.8, Medium: 1, High: 1.6 };
        const urgencyMult = { Normal: 1, Accelerated: 1.25, Rush: 1.6 };
        const base = basePrices[data.projectType] ?? 5000;
        const low = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 0.9);
        const high = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 1.25);
        const text = encodeURIComponent(`Olá Forpus Tech, gostaria de solicitar um orçamento.\n\nTipo: ${data.projectType}\nComplexidade: ${data.complexity}\nUrgência: ${data.urgency}\nFaixa: R$ ${low.toLocaleString()} - R$ ${high.toLocaleString()}\nEmail: ${data.email || '—'}\nDescrição: ${data.description || '—'}`);
        window.open(`https://wa.me/558799163274?text=${text}`, '_blank');
        setChatHistory(prev => [...prev, { type: 'bot', text: 'Abrindo WhatsApp para envio...' }]);
        setEstimatorActive(false);
        setEstimatorStep(0);
        setEstimatorData({ projectType: '', complexity: '', urgency: '', email: '', description: '' });
        return;
      }

      if (cmd === 'copiar' || cmd === 'copy') {
        const data = estimatorData;
        const basePrices = { 'Landing Page': 2000, Website: 5000, 'Mobile App': 15000, 'Custom System': 10000 };
        const complexityMult = { Low: 0.8, Medium: 1, High: 1.6 };
        const urgencyMult = { Normal: 1, Accelerated: 1.25, Rush: 1.6 };
        const base = basePrices[data.projectType] ?? 5000;
        const low = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 0.9);
        const high = Math.round(base * (complexityMult[data.complexity] ?? 1) * (urgencyMult[data.urgency] ?? 1) * 1.25);
        const summary = `Estimativa rápida Forpus Tech\nTipo: ${data.projectType}\nComplexidade: ${data.complexity}\nUrgência: ${data.urgency}\nFaixa: R$ ${low.toLocaleString()} - R$ ${high.toLocaleString()}\nEmail: ${data.email || '—'}\nDescrição: ${data.description || '—'}`;
        navigator.clipboard?.writeText(summary).then(() => {
          setChatHistory(prev => [...prev, { type: 'bot', text: 'Resumo copiado para a área de transferência.' }]);
        }).catch(() => {
          setChatHistory(prev => [...prev, { type: 'bot', text: 'Não foi possível copiar automaticamente.' }]);
        });
        setEstimatorActive(false);
        setEstimatorStep(0);
        setEstimatorData({ projectType: '', complexity: '', urgency: '', email: '', description: '' });
        return;
      }

      if (cmd === 'novo' || cmd === 'restart') {
        setEstimatorActive(true);
        setEstimatorStep(1);
        setEstimatorData({ projectType: '', complexity: '', urgency: '', email: '', description: '' });
        setChatHistory(prev => [...prev, { type: 'bot', text: 'Vamos iniciar um novo orçamento. Qual o tipo de projeto?' }]);
        return;
      }

      setChatHistory(prev => [...prev, { type: 'bot', text: 'Comando não reconhecido. Digite "enviar", "copiar" ou "novo".' }]);
      return;
    }
  };

  const handleFAQClick = (key) => {
    const faqItem = faqs.find(f => f.key === key);
    if (!faqItem) return;

    // Start estimator conversational flow
    if (key === 'estimator') {
      setShowFAQ(false);
      setEstimatorActive(true);
      setEstimatorStep(1);
      setChatHistory(prev => [
        ...prev,
        { type: 'user', text: faqItem.question },
        { type: 'bot', text: 'Ótimo — vamos gerar uma estimativa rápida. Primeiro: qual o tipo de projeto? (Landing Page / Website / App Mobile / Sistema Personalizado)' }
      ]);
      return;
    }

    if (faqItem) {
      setChatHistory(prev => [
        ...prev,
        { type: 'user', text: faqItem.question },
        { type: 'bot', text: knowledgeBase[key].response }
      ]);
      setShowFAQ(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`shadow-2xl rounded-sm w-[calc(100vw-3rem)] sm:w-96 mb-4 overflow-hidden flex flex-col transition-colors duration-500 ${
              isDark
                ? 'bg-forpus-dark border border-forpus-gold/20'
                : 'bg-white border border-forpus-brown/10'
            }`}
            style={{ maxHeight: '600px' }}
          >
            {/* Header */}
            <div className="bg-forpus-dark text-forpus-bg p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-forpus-gold text-lg">Φ</span>
                <div>
                  <h3 className="font-serif font-medium tracking-wide">Oráculo Forpus</h3>
                  <p className="text-xs text-forpus-bg/70">Responde em tempo real</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-forpus-bg/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className={`flex-1 p-4 overflow-y-auto flex flex-col gap-4 ${
              isDark ? 'bg-forpus-dark/50' : 'bg-forpus-bg/30'
            }`}>
              {chatHistory.map((chat, index) => (
                <div 
                  key={index} 
                  className={`max-w-[85%] p-3 rounded-sm text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                    chat.type === 'user' 
                      ? 'bg-forpus-gold text-forpus-dark self-end rounded-tr-none'
                      : isDark
                        ? 'bg-forpus-dark border border-forpus-gold/30 text-forpus-bg self-start rounded-tl-none'
                        : 'bg-white border border-forpus-brown/10 text-forpus-dark self-start rounded-tl-none'
                  }`}
                >
                  {chat.text}
                </div>
              ))}
            </div>

            {/* FAQ Buttons */}
            {showFAQ && chatHistory.length === 1 && (
              <div className={`px-4 py-3 border-t transition-colors duration-500 ${
                isDark
                  ? 'bg-forpus-dark/70 border-forpus-gold/20'
                  : 'bg-white border-forpus-brown/10'
              }`}>
                <p className={`text-xs font-semibold mb-2 ${
                  isDark ? 'text-forpus-gold' : 'text-forpus-brown'
                }`}>PERGUNTAS FREQUENTES:</p>
                <div className="space-y-1.5 max-h-40 overflow-y-auto">
                  {faqs.map((faq) => (
                    <button
                      key={faq.key}
                      onClick={() => handleFAQClick(faq.key)}
                      className={`w-full text-left text-xs p-2 rounded transition-all flex items-center justify-between group ${
                        isDark
                          ? 'bg-forpus-dark border border-forpus-gold/20 text-forpus-bg hover:border-forpus-gold/50 hover:bg-forpus-gold/10'
                          : 'bg-forpus-bg border border-forpus-brown/20 text-forpus-dark hover:border-forpus-brown/50 hover:bg-forpus-brown/5'
                      }`}
                    >
                      <span>{faq.question}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className={`p-4 border-t transition-colors duration-500 ${
              isDark
                ? 'bg-forpus-dark/70 border-forpus-gold/20'
                : 'bg-white border-forpus-brown/10'
            }`}>
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Faça uma pergunta..."
                  className={`flex-1 rounded-sm px-3 py-2 text-sm focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-forpus-dark border border-forpus-gold/30 text-forpus-bg focus:border-forpus-gold'
                      : 'bg-forpus-bg/50 border border-forpus-brown/20 focus:border-forpus-brown'
                  }`}
                />
                <button 
                  type="submit"
                  className={`p-2 rounded-sm transition-colors flex items-center justify-center ${
                    isDark
                      ? 'bg-forpus-gold text-forpus-dark hover:bg-forpus-bg'
                      : 'bg-forpus-dark text-forpus-gold hover:bg-forpus-brown'
                  }`}
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors ${
          isDark
            ? 'bg-forpus-gold text-forpus-dark hover:bg-forpus-bg'
            : 'bg-forpus-dark text-forpus-gold hover:bg-forpus-brown'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
