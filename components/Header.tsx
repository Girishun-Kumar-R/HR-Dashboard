"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 border-b flex justify-between items-center">
      <nav className="flex gap-4 text-sm font-medium text-gray-700 dark:text-gray-200">
        <Link href="/">Dashboard</Link>
        <Link href="/bookmarks">Bookmarks</Link>
        <Link href="/analytics">Analytics</Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs text-gray-800 dark:text-gray-100"
      >
        Toggle {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
};
