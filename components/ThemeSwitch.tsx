"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed buttom-5 right-5 rounded-full bg-white p-3 bg-opacity-80 backdrop-blur-[0.5rem] flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
