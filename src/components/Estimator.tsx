import React, { useState } from 'react';
import { Calculator, Check, Copy, Send } from 'lucide-react';

type Props = {
  isDark: boolean;
};

const Estimator = ({ isDark }: Props) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('Website');
  const [complexity, setComplexity] = useState('Medium');
  const [urgency, setUrgency] = useState('Normal');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const basePrices: Record<string, number> = {
    'Landing Page': 2000,
    Website: 5000,
    'Mobile App': 15000,
    'Custom System': 10000,
  };

  const complexityMult: Record<string, number> = {
    Low: 0.8,
    Medium: 1,
    High: 1.6,
  };

  const urgencyMult: Record<string, number> = {
    Normal: 1,
    Accelerated: 1.25,
    Rush: 1.6,
  };

  const estimate = () => {
    const base = basePrices[projectType] ?? 5000;
    const low = Math.round(base * complexityMult[complexity] * urgencyMult[urgency] * 0.9);
    const high = Math.round(base * complexityMult[complexity] * urgencyMult[urgency] * 1.25);
    return { low, high };
  };

  const summaryText = () => {
    const e = estimate();
    return `Estimativa rápida Forpus Tech\nTipo: ${projectType}\nComplexidade: ${complexity}\nUrgência: ${urgency}\nFaixa de preço: R$ ${e.low.toLocaleString()} - R$ ${e.high.toLocaleString()}\nEmail: ${email || '—'}\nDescrição: ${description || '—'}`;
  };

  const handleSendWhatsApp = () => {
    const phone = '558799163274';
    const text = encodeURIComponent(`Olá Forpus Tech, gostaria de solicitar um orçamento.\n\n${summaryText()}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText());
      alert('Resumo copiado para a área de transferência');
    } catch (err) {
      // fallback
      alert('Não foi possível copiar.');
    }
  };

  const e = estimate();

  return (
    <div className="fixed bottom-6 right-24 z-50 flex flex-col items-end">
      {open && (
        <div
          className={`w-[calc(100vw-3rem)] sm:w-96 mb-4 overflow-hidden flex flex-col rounded-sm shadow-2xl transition-colors duration-300 p-4 ${
            isDark ? 'bg-forpus-dark border border-forpus-gold/20' : 'bg-white border border-forpus-brown/10'
          }`}
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <h4 className="font-serif text-lg">Estimador Rápido</h4>
              <p className="text-xs text-forpus-bg/70">Receba uma faixa de orçamento instantânea.</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => { setOpen(false); setStep(1); }} className="text-sm px-2 py-1 rounded-sm border">
                Fechar
              </button>
            </div>
          </div>

          {step === 1 && (
            <div className="space-y-3">
              <label className="block text-xs">Tipo de projeto</label>
              <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="w-full px-3 py-2 rounded-sm border">
                <option>Landing Page</option>
                <option>Website</option>
                <option>Mobile App</option>
                <option>Custom System</option>
              </select>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs">Complexidade</label>
                  <select value={complexity} onChange={(e) => setComplexity(e.target.value)} className="w-full px-3 py-2 rounded-sm border">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs">Urgência</label>
                  <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className="w-full px-3 py-2 rounded-sm border">
                    <option>Normal</option>
                    <option>Accelerated</option>
                    <option>Rush</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end">
                <button onClick={() => setStep(2)} className="px-4 py-2 rounded-sm bg-forpus-gold text-forpus-dark font-medium">Próximo</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <label className="block text-xs">Seu email (opcional)</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 rounded-sm border" placeholder="seu@email.com" />

              <label className="block text-xs">Descrição breve</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-3 py-2 rounded-sm border" rows={3} placeholder="Descreva seu projeto..." />

              <div className="flex justify-between items-center">
                <div className="text-sm">Faixa estimada: <strong>R$ {e.low.toLocaleString()} - R$ {e.high.toLocaleString()}</strong></div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setStep(1)} className="px-3 py-2 rounded-sm border">Voltar</button>
                  <button onClick={handleCopy} className="px-3 py-2 rounded-sm border flex items-center gap-2"><Copy size={14} /> Copiar</button>
                  <button onClick={handleSendWhatsApp} className="px-3 py-2 rounded-sm bg-forpus-gold text-forpus-dark flex items-center gap-2"><Send size={14} /> Solicitar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-colors ${
          isDark ? 'bg-forpus-gold text-forpus-dark' : 'bg-forpus-dark text-forpus-gold'
        }`}
        aria-label="Abrir estimador rápido"
      >
        <Calculator size={20} />
      </button>
    </div>
  );
};

export default Estimator;
