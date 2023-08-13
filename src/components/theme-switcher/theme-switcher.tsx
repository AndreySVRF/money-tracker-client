import { useTheme } from './hooks';
import { DarkModeIcon, LightModeIcon, SystemModeIcon } from '../../assets';

const ThemeSwitcher = () => {
  const { themeOptions, setTheme } = useTheme({
    light: <LightModeIcon className="fill-amber-500 dark:fill-amber-300" />,
    dark: <DarkModeIcon className="fill-blue-300 dark:fill-amber-100" />,
    system: <SystemModeIcon className="fill-gray-600 dark:fill-blue-100" />
  });

  const themeOptionsRender = themeOptions.map((themeOption) => (
    <button
      className="rounded-full border border-gray-300 p-1.5 dark:border-gray-600"
      onClick={() => setTheme(themeOption.text)}
      key={themeOption.text}
    >
      {themeOption.icon ? (
        <span className="flex h-5 w-5">{themeOption.icon}</span>
      ) : (
        <span className="capitalize">{themeOption.text}</span>
      )}
    </button>
  ));

  return <div className="flex gap-2">{themeOptionsRender}</div>;
};

export { ThemeSwitcher };
