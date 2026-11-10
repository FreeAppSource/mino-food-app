import React, { createContext, useContext, useState } from 'react';

export const colors = {
  primary: '#BF213E',
  primaryDark: '#97213E',
  primarySoft: 'rgba(191, 33, 62, 0.12)',
  secondary: '#F2AE2E',
  secondaryLight: '#FFBD2F',
  secondarySoft: 'rgba(242, 174, 46, 0.15)',
  accentTeal: '#009EA9',
  accentPeach: '#FFBE9D',
  accentSalmon: '#EB996E',
  textDark: '#1A1824',
  textNavy: '#1A2E35',
  textMuted: '#777777',
  textBody: '#444444',
  border: '#E1E1E1',
  borderLight: '#D8D8D8',
  white: '#FFFFFF',
  black: '#000000',
  starYellow: '#FFBD2F',
  success: '#009EA9',
  background: '#FAFAFA',
  card: '#FFFFFF',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const palettes = {
  light: {
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    cardBorder: '#E8ECF2',
    text: '#1A1824',
    subText: '#777777',
    bodyText: '#444444',
    iconColor: '#1A1824',
    divider: '#E1E1E1',
    inputBg: '#F3F4F6',
  },
  dark: {
    bg: '#141218',
    surface: '#1F1C25',
    card: '#26222F',
    cardBorder: 'rgba(255, 255, 255, 0.08)',
    text: '#FFFFFF',
    subText: '#A19EAF',
    bodyText: '#D1CFDB',
    iconColor: '#FFFFFF',
    divider: 'rgba(255, 255, 255, 0.12)',
    inputBg: '#2A2635',
  },
};

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: palettes.light,
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const theme = isDark ? palettes.dark : palettes.light;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
