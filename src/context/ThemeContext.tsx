'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useSyncExternalStore } from 'react';

export type ThemeMode = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  theme: ResolvedTheme;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const emptySubscribe = () => () => {};

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
};

const applyThemeToDOM = (resolved: ResolvedTheme, mode: ThemeMode) => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
    document.documentElement.setAttribute('data-theme-mode', mode);
  }
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
      if (saved === 'system' || saved === 'light' || saved === 'dark') {
        return saved;
      }
    }
    return 'system';
  });

  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
      return getSystemTheme();
    }
    return 'dark';
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleMediaChange = (e: MediaQueryListEvent) => {
      const currentSaved = localStorage.getItem('portfolio_theme') as ThemeMode | null;
      const isSystemMode = !currentSaved || currentSaved === 'system';
      if (isSystemMode) {
        const sysTheme: ResolvedTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(sysTheme);
        applyThemeToDOM(sysTheme, 'system');
      }
    };

    // Ensure DOM matches initial state
    const currentMode = (localStorage.getItem('portfolio_theme') as ThemeMode) || 'system';
    const active = currentMode === 'system' ? getSystemTheme() : currentMode;
    applyThemeToDOM(active, currentMode);

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const setThemeMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    const resolved: ResolvedTheme = newMode === 'system' ? getSystemTheme() : newMode;
    setResolvedTheme(resolved);

    if (typeof window !== 'undefined') {
      if (newMode === 'system') {
        localStorage.setItem('portfolio_theme', 'system');
      } else {
        localStorage.setItem('portfolio_theme', newMode);
      }
      applyThemeToDOM(resolved, newMode);
    }
  };

  const toggleTheme = () => {
    // Cycles: system -> light -> dark -> system
    if (mode === 'system') {
      setThemeMode('light');
    } else if (mode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('system');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: resolvedTheme,
        setThemeMode,
        toggleTheme,
        mounted
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
