import { useCallback, useEffect, useState } from 'react';
import { IThemeOptions, IThemeOptionsIcons, ThemeMode } from './types';

const useTheme = (icons?: IThemeOptionsIcons) => {
  const [theme, setTheme] = useState<ThemeMode>(
    localStorage.getItem('theme')
      ? (String(localStorage.getItem('theme')) as ThemeMode)
      : ThemeMode.System
  );

  const rootNode = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark');

  const themeOptions: IThemeOptions[] = [
    {
      text: ThemeMode.Light,
      icon: icons?.light
    },
    {
      text: ThemeMode.Dark,
      icon: icons?.dark
    },
    {
      text: ThemeMode.System,
      icon: icons?.system
    }
  ];

  const onWindowMath = useCallback(() => {
    if (
      localStorage.theme === ThemeMode.Dark ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      rootNode.classList.add(ThemeMode.Dark);
    } else {
      rootNode.classList.remove(ThemeMode.Dark);
    }
  }, [darkQuery.matches, rootNode.classList]);

  onWindowMath();

  useEffect(() => {
    switch (String(theme)) {
      case ThemeMode.Dark:
        rootNode.classList.add(ThemeMode.Dark);
        localStorage.setItem('theme', ThemeMode.Dark);
        break;
      case ThemeMode.Light:
        rootNode.classList.remove(ThemeMode.Dark);
        localStorage.setItem('theme', ThemeMode.Light);
        break;
      default:
        localStorage.removeItem('theme');
        onWindowMath();
        break;
    }
  }, [onWindowMath, rootNode.classList, theme]);

  return { themeOptions, setTheme };
};

export { useTheme };
