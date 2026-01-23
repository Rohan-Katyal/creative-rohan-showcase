import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-white/90 dark:bg-charcoal/90 backdrop-blur-sm border border-mustard/20 dark:border-mustard/30 shadow-lg hover:scale-110 transition-all duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-charcoal" />
      ) : (
        <Sun className="w-5 h-5 text-mustard" />
      )}
    </button>
  );
};

export default ThemeToggle;
