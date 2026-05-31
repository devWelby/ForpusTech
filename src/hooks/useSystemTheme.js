import { useState, useEffect } from 'react';

export const useSystemTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica se o sistema está em dark mode
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Define o estado inicial
    setIsDark(darkModeQuery.matches);

    // Listener para mudanças de tema no sistema
    const handleThemeChange = (e) => {
      setIsDark(e.matches);
    };

    // Adiciona listener
    darkModeQuery.addEventListener('change', handleThemeChange);

    // Remove listener ao desmontar
    return () => {
      darkModeQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return isDark;
};
