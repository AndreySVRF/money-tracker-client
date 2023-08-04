import { useCallback, useEffect, useState } from 'react';
import { IThemeOptions, IThemeOptionsIcons, ThemeMode } from './types';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage
} from '../../../../utils';

const THEME_KEY = 'theme';

const useTheme = (icons?: IThemeOptionsIcons) => {
  const rootNode = document.documentElement;
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark');

  const isSystemDarkMode =
    getFromLocalStorage(THEME_KEY) === ThemeMode.Dark ||
    (!(THEME_KEY in localStorage) && darkQuery.matches);

  const [theme, setTheme] = useState<ThemeMode>(
    getFromLocalStorage(THEME_KEY)
      ? (getFromLocalStorage(THEME_KEY) as ThemeMode)
      : isSystemDarkMode
      ? ThemeMode.Dark
      : ThemeMode.Light
  );

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
    if (isSystemDarkMode) {
      rootNode.classList.add(ThemeMode.Dark);
    } else {
      rootNode.classList.remove(ThemeMode.Dark);
    }
  }, [isSystemDarkMode, rootNode.classList]);

  onWindowMath();

  useEffect(() => {
    switch (String(theme)) {
      case ThemeMode.Dark:
        rootNode.classList.add(ThemeMode.Dark);
        setToLocalStorage(THEME_KEY, ThemeMode.Dark);
        break;
      case ThemeMode.Light:
        rootNode.classList.remove(ThemeMode.Dark);
        setToLocalStorage(THEME_KEY, ThemeMode.Light);
        break;
      default:
        removeFromLocalStorage(THEME_KEY);
        onWindowMath();
        break;
    }
  }, [onWindowMath, rootNode.classList, theme]);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return { theme, setTheme, themeOptions };
};

export { useTheme };
