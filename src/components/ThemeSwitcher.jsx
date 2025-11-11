import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Button from './Button';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="secondary" size="sm">
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
};

export default ThemeSwitcher;