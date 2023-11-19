import React, { createContext, useContext, useEffect, useState } from 'react';

import { jsonSafeStorage } from 'typesdk/ssr';
import { useRender } from '@hooks';


export type ThemeContext = {
  readonly theme: 'light' | 'dark';
  setTheme: (mode: 'dark' | 'light') => void;
}

const ThemeContextRoot = createContext({} as ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  useRender(() => {
    const storage = jsonSafeStorage('localStorage');
    const mode = storage.getItem('__nextboard._theme-mode') as string | undefined;

    if(mode && ['dark', 'light'].includes(mode)) {
      setThemeMode(mode as 'light' | 'dark');
    } else {
      storage.setItem('__nextboard._theme-mode', 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('theme-dark', 'theme-light');
    document.body.classList.remove('theme-dark', 'theme-light');

    document.documentElement.classList.add(`theme-${themeMode}`);
    document.body.classList.add(`theme-${themeMode}`);
  }, [themeMode]);

  function setTheme(mode: 'dark' | 'light'): void {
    const storage = jsonSafeStorage('localStorage');
    storage.setItem('__nextboard._theme-mode', mode);
    setThemeMode(mode);
  }

  const value = {
    theme: themeMode,
    setTheme,
  };

  return (
    <ThemeContextRoot.Provider value={value}>
      { children }
    </ThemeContextRoot.Provider>
  );
}


export function useTheme(): ThemeContext {
  const ctx = useContext(ThemeContextRoot);

  if(!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx;
}