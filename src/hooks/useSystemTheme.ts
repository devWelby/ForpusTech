import { useState, useEffect } from 'react';

export const useSystemTheme = (): boolean => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(darkModeQuery.matches);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    if (typeof darkModeQuery.addEventListener === 'function') {
      darkModeQuery.addEventListener('change', handleThemeChange);
      return () => darkModeQuery.removeEventListener('change', handleThemeChange);
    }

    // Fallback para browsers antigos que usam addListener
    // Mantemos a referência para remoção correta
    // @ts-ignore: legacy API
    const legacyHandler = (e: MediaQueryListEvent | MediaQueryList) => setIsDark((e as any).matches);
    // @ts-ignore: legacy API
    darkModeQuery.addListener(legacyHandler);
    return () => {
      // @ts-ignore: legacy API
      darkModeQuery.removeListener(legacyHandler);
    };
  }, []);

  return isDark;
};
