import React from 'react';
import { useSystemTheme } from './hooks/useSystemTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const isDark = useSystemTheme();

  return (
    <div className={`min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-forpus-dark text-forpus-bg' 
        : 'bg-forpus-bg text-forpus-dark'
    }`}>
      <Header isDark={isDark} />
      <main className="flex-grow">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Services isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
      <ChatWidget isDark={isDark} />
    </div>
  );
}

export default App;
