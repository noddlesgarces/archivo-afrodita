"use client";

import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

interface DarkModeToggleProps {
  className?: string;
}

export default function DarkModeToggle({ className = "" }: DarkModeToggleProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDarkMode
          ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
          : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
      } ${className}`}
      title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
