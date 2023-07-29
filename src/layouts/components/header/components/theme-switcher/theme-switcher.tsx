import { useTheme } from './hooks';

const ThemeSwitcher = () => {
  const { themeOptions, setTheme } = useTheme();

  const themeOptionsRender = themeOptions.map((themeOption) => (
    <button
      className="dark: rounded-full border border-gray-300 p-1.5 dark:border-gray-600"
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
