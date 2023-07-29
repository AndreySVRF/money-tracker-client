import { ReactNode } from 'react';

enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
  System = 'system'
}

interface IThemeOptions {
  text: ThemeMode;
  icon?: ReactNode;
}

interface IThemeOptionsIcons {
  dark: ReactNode;
  light: ReactNode;
  system: ReactNode;
}

export { ThemeMode };
export type { IThemeOptions, IThemeOptionsIcons };
